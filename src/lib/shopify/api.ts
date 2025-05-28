import {
  shopifyFetch,
  normalizeShopifyProducts,
  extractProductsFromResponse,
  extractProductFromResponse,
  isShopifyConfigured,
} from './client';
import {
  GET_PRODUCTS_QUERY,
  GET_PRODUCT_BY_HANDLE_QUERY,
  GET_PRODUCT_BY_ID_QUERY,
  GET_COLLECTION_PRODUCTS_QUERY,
  GET_COLLECTIONS_QUERY,
  GET_FEATURED_PRODUCTS_QUERY,
  SEARCH_PRODUCTS_QUERY,
} from './queries';
import type {
  ShopifyProductsResponse,
  ShopifyProductResponse,
  ShopifyCollectionResponse,
  ShopifyCollectionsResponse,
  ShopifyProductNormalized,
  ShopifyProduct,
} from '@/types/shopify';

// Default pagination settings
const DEFAULT_FIRST = 20;

// Get all products with optional filtering and pagination
export const getProducts = async (options?: {
  first?: number;
  after?: string;
  query?: string;
  sortKey?: string;
  reverse?: boolean;
}): Promise<{
  products: ShopifyProductNormalized[];
  hasNextPage: boolean;
  endCursor?: string;
} | null> => {
  if (!isShopifyConfigured()) {
    return null;
  }

  const response = await shopifyFetch<ShopifyProductsResponse>(GET_PRODUCTS_QUERY, {
    first: options?.first || DEFAULT_FIRST,
    after: options?.after,
    query: options?.query,
    sortKey: options?.sortKey,
    reverse: options?.reverse,
  });

  if (!response) {
    return null;
  }

  const products = extractProductsFromResponse(response);
  const normalizedProducts = normalizeShopifyProducts(products);

  return {
    products: normalizedProducts,
    hasNextPage: response.products.pageInfo.hasNextPage,
    endCursor: response.products.pageInfo.endCursor,
  };
};

// Get featured products (products with 'featured' tag)
export const getFeaturedProducts = async (first = 12): Promise<ShopifyProductNormalized[] | null> => {
  if (!isShopifyConfigured()) {
    return null;
  }

  const response = await shopifyFetch<ShopifyProductsResponse>(GET_FEATURED_PRODUCTS_QUERY, {
    first,
  });

  if (!response) {
    return null;
  }

  const products = extractProductsFromResponse(response);
  return normalizeShopifyProducts(products);
};

// Get products by category/collection
export const getProductsByCollection = async (
  collectionHandle: string,
  options?: {
    first?: number;
    after?: string;
  }
): Promise<{
  products: ShopifyProductNormalized[];
  collection: {
    id: string;
    title: string;
    description: string;
    image?: string;
  };
  hasNextPage: boolean;
  endCursor?: string;
} | null> => {
  if (!isShopifyConfigured()) {
    return null;
  }

  const response = await shopifyFetch<ShopifyCollectionResponse>(GET_COLLECTION_PRODUCTS_QUERY, {
    handle: collectionHandle,
    first: options?.first || DEFAULT_FIRST,
    after: options?.after,
  });

  if (!response?.collection) {
    return null;
  }

  const products = response.collection.products.edges.map(edge => edge.node);
  const normalizedProducts = normalizeShopifyProducts(products);

  return {
    products: normalizedProducts,
    collection: {
      id: response.collection.id,
      title: response.collection.title,
      description: response.collection.description,
      image: response.collection.image?.url,
    },
    hasNextPage: response.collection.products.pageInfo.hasNextPage,
    endCursor: response.collection.products.pageInfo.endCursor,
  };
};

// Get single product by handle
export const getProductByHandle = async (handle: string): Promise<ShopifyProductNormalized | null> => {
  if (!isShopifyConfigured()) {
    return null;
  }

  const response = await shopifyFetch<ShopifyProductResponse>(GET_PRODUCT_BY_HANDLE_QUERY, {
    handle,
  });

  if (!response) {
    return null;
  }

  const product = extractProductFromResponse(response);
  if (!product) {
    return null;
  }

  return normalizeShopifyProducts([product])[0];
};

// Get single product by ID
export const getProductById = async (id: string): Promise<ShopifyProductNormalized | null> => {
  if (!isShopifyConfigured()) {
    return null;
  }

  const response = await shopifyFetch<ShopifyProductResponse>(GET_PRODUCT_BY_ID_QUERY, {
    id,
  });

  if (!response) {
    return null;
  }

  const product = extractProductFromResponse(response);
  if (!product) {
    return null;
  }

  return normalizeShopifyProducts([product])[0];
};

// Search products
export const searchProducts = async (
  query: string,
  options?: {
    first?: number;
    after?: string;
  }
): Promise<{
  products: ShopifyProductNormalized[];
  hasNextPage: boolean;
  endCursor?: string;
} | null> => {
  if (!isShopifyConfigured()) {
    return null;
  }

  const response = await shopifyFetch<ShopifyProductsResponse>(SEARCH_PRODUCTS_QUERY, {
    query,
    first: options?.first || DEFAULT_FIRST,
    after: options?.after,
  });

  if (!response) {
    return null;
  }

  const products = extractProductsFromResponse(response);
  const normalizedProducts = normalizeShopifyProducts(products);

  return {
    products: normalizedProducts,
    hasNextPage: response.products.pageInfo.hasNextPage,
    endCursor: response.products.pageInfo.endCursor,
  };
};

// Get available collections
export const getCollections = async (options?: {
  first?: number;
  after?: string;
}): Promise<{
  collections: Array<{
    id: string;
    handle: string;
    title: string;
    description: string;
    image?: string;
  }>;
  hasNextPage: boolean;
  endCursor?: string;
} | null> => {
  if (!isShopifyConfigured()) {
    return null;
  }

  const response = await shopifyFetch<ShopifyCollectionsResponse>(GET_COLLECTIONS_QUERY, {
    first: options?.first || DEFAULT_FIRST,
    after: options?.after,
  });

  if (!response) {
    return null;
  }

  const collections = response.collections.edges.map(edge => ({
    id: edge.node.id,
    handle: edge.node.handle,
    title: edge.node.title,
    description: edge.node.description,
    image: edge.node.image?.url,
  }));

  return {
    collections,
    hasNextPage: response.collections.pageInfo.hasNextPage,
    endCursor: response.collections.pageInfo.endCursor,
  };
};

// Get products by specific tags (useful for categories)
export const getProductsByTags = async (
  tags: string[],
  options?: {
    first?: number;
    after?: string;
  }
): Promise<{
  products: ShopifyProductNormalized[];
  hasNextPage: boolean;
  endCursor?: string;
} | null> => {
  if (!isShopifyConfigured()) {
    return null;
  }

  const tagQuery = tags.map(tag => `tag:${tag}`).join(' OR ');
  
  return getProducts({
    ...options,
    query: tagQuery,
  });
};

// Get recently added products
export const getRecentProducts = async (first = 12): Promise<ShopifyProductNormalized[] | null> => {
  if (!isShopifyConfigured()) {
    return null;
  }

  const response = await shopifyFetch<ShopifyProductsResponse>(GET_PRODUCTS_QUERY, {
    first,
    sortKey: 'CREATED_AT',
    reverse: true,
  });

  if (!response) {
    return null;
  }

  const products = extractProductsFromResponse(response);
  return normalizeShopifyProducts(products);
};

// Get best selling products (requires additional setup in Shopify)
export const getBestSellingProducts = async (first = 12): Promise<ShopifyProductNormalized[] | null> => {
  if (!isShopifyConfigured()) {
    return null;
  }

  const response = await shopifyFetch<ShopifyProductsResponse>(GET_PRODUCTS_QUERY, {
    first,
    sortKey: 'BEST_SELLING',
    reverse: false,
  });

  if (!response) {
    return null;
  }

  const products = extractProductsFromResponse(response);
  return normalizeShopifyProducts(products);
};