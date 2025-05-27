import { notFound } from 'next/navigation';
import { products, Product } from '@/data/products';
import ProductDetailClient from './ProductDetailClient';

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
  const product = products.find((p) => p.id === id);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} | INKEY`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
