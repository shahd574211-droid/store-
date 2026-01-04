import { featchAllProdect } from '@/utils/action';
import React from 'react'
import { Button } from '../ui/button';
import { LuLayoutGrid, LuList } from 'react-icons/lu';
import Link from 'next/link';
import { Links } from '@/utils/Link';
import ProductsGrid from './ProductsGrid';
import ProductsList from './ProductsList';

async function ProductsContainer({ layout,search }: { layout: string ,search:string }) {
  const tatelProducts = await featchAllProdect({search});
  const lengthProducts = tatelProducts.length;
  const searchTerm = search ? `&search${search}` : '' ;

  return (
    <>
      {/* Header Section */}
      <section>
        <div className='flex justify-between items-center mb-8'>
          <h4 className='font-medium text-lg'>
            {lengthProducts} product{lengthProducts > 1 && "s"}
          </h4>
          <div className='flex gap-x-4'>
            {/* Grid Button */}
            <Button
              variant={layout === 'grid' ? "default" : "outline"}
              size={"icon"}
              asChild
            >
              {/* تم إزالة المسافات من الرابط هنا */}
              <Link href={`${Links.PRODUCTS.href}?layout=grid${searchTerm}`}>
                <LuLayoutGrid />
              </Link>
            </Button>

            {/* List Button */}
            <Button
              variant={layout === 'list' ? "default" : "outline"}
              size={"icon"}
              asChild
            >
              {/* تم إزالة المسافات من الرابط هنا */}
              <Link href={`${Links.PRODUCTS.href}?layout=list${searchTerm}`}>
                <LuList />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Products Display Section */}
      <section>
        {tatelProducts.length === 0 ? (
          <h5 className='text-xl mt-16'>Sorry, no products matched your search.</h5>
        ) : layout === "grid" ? (
          <ProductsGrid products={tatelProducts} />
        ) : (
          <ProductsList products={tatelProducts} />
        )}
      </section>
    </>
  )
}

export default ProductsContainer