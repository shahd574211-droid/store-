import ProductsContainer from '@/components/prodcuts/ProductsContainer';

interface ProductsPageProps {
  searchParams: Promise<{ 
    layout?: string 
    search?: string
  }>;
}

export default async function ProdectesPage({ searchParams }: ProductsPageProps) {
  const resolvedParams = await searchParams;
  const layout = resolvedParams.layout || 'grid';
 const search = resolvedParams.search || '';
console.log(search)
  return (
    <main className="container py-10">
      <ProductsContainer layout={layout} search={search} />
    </main>
  );
}