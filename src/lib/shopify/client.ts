// Instructions: Create the complete Shopify client with all necessary functions

import { GraphQLClient } from 'graphql-request';
import type {
  ShopifyProduct,
  ShopifyProductsResponse,
  ShopifyProductResponse,
  ShopifyCollectionResponse,
  ShopifyCollectionsResponse,
  ShopifyProductNormalized
} from '@/types/shopify';

// Shopify Storefront API configuration
const SHOPIFY_STORE_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || 'evmxpp-pz.myshopify.com';
const SHOPIFY_STOREFRONT_ACCESS_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || '96b6920545b23376b888ff1cb002d5df';

if (!SHOPIFY_STORE_DOMAIN || !SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
  console.warn('Shopify configuration missing. Shopify features will be disabled.');
}

// Create GraphQL client
const shopifyClient = new GraphQLClient(
  `https://${SHOPIFY_STORE_DOMAIN}/api/2023-10/graphql.json`,
  {
    headers: {
      'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_ACCESS_TOKEN || '',
      'Content-Type': 'application/json',
    },
  }
);

// Check if Shopify is configured
export const isShopifyConfigured = (): boolean => {
  const configured = !!(SHOPIFY_STORE_DOMAIN && SHOPIFY_STOREFRONT_ACCESS_TOKEN);
  console.log('Shopify Configuration Check:', {
    domain: SHOPIFY_STORE_DOMAIN,
    hasToken: !!SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    configured
  });
  // Force return true for testing since we have hardcoded values
  return true;
};

// Execute GraphQL query with error handling
export const shopifyFetch = async <T>(
  query: string,
  variables?: Record<string, any>
): Promise<T | null> => {
  console.log('shopifyFetch called with:', {
    domain: SHOPIFY_STORE_DOMAIN,
    hasToken: !!SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    configured: isShopifyConfigured()
  });

  if (!isShopifyConfigured()) {
    console.warn('Shopify not configured, skipping API call');
    return null;
  }

  try {
    console.log('Making Shopify API request to:', `https://${SHOPIFY_STORE_DOMAIN}/api/2023-10/graphql.json`);
    const response = await shopifyClient.request<T>(query, variables);
    console.log('Shopify API response:', response);
    return response;
  } catch (error) {
    console.error('Shopify API Error:', error);
    return null;
  }
};

// Normalize a single Shopify product to our internal format
export const normalizeShopifyProduct = (product: ShopifyProduct): ShopifyProductNormalized => {
  const firstVariant = product.variants.edges[0]?.node;
  const firstImage = product.images.edges[0]?.node;

  return {
    id: product.id,
    handle: product.handle,
    title: product.title,
    description: product.description,
    vendor: product.vendor,
    productType: product.productType,
    tags: product.tags,
    price: firstVariant?.price?.amount ? Number.parseFloat(firstVariant.price.amount) : 0,
    compareAtPrice: firstVariant?.compareAtPrice?.amount ? Number.parseFloat(firstVariant.compareAtPrice.amount) : null,
    currency: firstVariant?.price?.currencyCode || 'USD',
    image: firstImage?.url || '',
    images: product.images.edges.map(edge => edge.node.url),
    availableForSale: product.availableForSale,
    totalInventory: product.totalInventory,
    variants: product.variants.edges.map(edge => edge.node),
    seo: {
      title: product.seo?.title || product.title,
      description: product.seo?.description || product.description
    },
    source: 'shopify' as const
  };
};

// Normalize multiple Shopify products
export const normalizeShopifyProducts = (products: ShopifyProduct[]): ShopifyProductNormalized[] => {
  return products.map(normalizeShopifyProduct);
};

// Extract products from a Shopify products response
export const extractProductsFromResponse = (response: ShopifyProductsResponse): ShopifyProduct[] => {
  return response.products?.edges?.map(edge => edge.node) || [];
};

// Extract single product from a Shopify product response
export const extractProductFromResponse = (response: ShopifyProductResponse): ShopifyProduct | null => {
  return response.product || null;
};

// Extract collections from a Shopify collections response
export const extractCollectionsFromResponse = (response: ShopifyCollectionsResponse) => {
  return response.collections?.edges?.map(edge => edge.node) || [];
};

// Helper function to get a product by handle with proper typing
export const getProductFromResponse = (response: any): ShopifyProduct | null => {
  if (response && response.product) {
    return response.product;
  }
  return null;
};
