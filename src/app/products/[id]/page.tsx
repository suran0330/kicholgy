import { notFound } from 'next/navigation';
import { products, Product } from '@/data/products';
import ProductDetailClient from './ProductDetailClient';
import ProductDetailShopify from '@/components/ProductDetailShopify';
import { getProductByHandle } from '@/lib/shopify/api';

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { id } = await params;
  
  // First try to find local product
  const localProduct = products.find((p) => p.id === id);
  
  if (localProduct) {
    return {
      title: `${localProduct.name} | INKEY`,
      description: localProduct.description,
    };
  }

  // If not found locally, try Shopify (for server-side rendering)
  try {
    const shopifyProduct = await getProductByHandle(id);
    if (shopifyProduct) {
      return {
        title: `${shopifyProduct.name} | INKEY`,
        description: shopifyProduct.description,
      };
    }
  } catch (error) {
    console.log('Could not fetch Shopify product for metadata:', error);
  }

  return {
    title: 'Product Not Found',
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  
  // First try to find local product
  const localProduct = products.find((p) => p.id === id);
  
  if (localProduct) {
    return <ProductDetailClient product={localProduct} />;
  }

  // If not found locally, try to render Shopify product page
  // The Shopify product will be loaded client-side
  return <ProductDetailShopify productHandle={id} />;
}
