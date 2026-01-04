import { Suspense } from 'react';
import ProductsContainer from '@/components/prodcuts/ProductsContainer';

// إجبار الصفحة على العمل كصفحة ديناميكية 100%
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

export default async function ProdectesPage({
  searchParams,
}: {
  searchParams: Promise<{ layout?: string; search?: string }>;
}) {
  const resolvedParams = await searchParams;
  const layout = resolvedParams.layout || 'grid';
  const search = resolvedParams.search || '';

  return (
    <main className="container py-10">
      {/* استخدام Suspense يمنع الـ Build من الانهيار إذا فشل الاتصال لحظياً */}
      <Suspense fallback={<div>Loading Products...</div>}>
        <ProductsContainer layout={layout} search={search} />
      </Suspense>
    </main>
  );
}