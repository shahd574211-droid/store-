import FavoriteToggleButton from '@/components/prodcuts/FavoriteToggleButton';
import AddCart from '@/components/single-prodect/AddCart';
import BreadCrumbs from '@/components/single-prodect/BreadCrumbs'
import ProductRating from '@/components/single-prodect/ProductRating';
import { fetchSingleProduct } from '@/utils/action';
import { formatCurrency } from '@/utils/format';
import Image from 'next/image';
import React from 'react'



async function ProdectesDetailsPage({ params }: any) {
  const { id } = await params;
  const product = await fetchSingleProduct(id)
  const dollarAmount = formatCurrency(product.price)

  return (
    <section>
      <BreadCrumbs name={product.name} />
      <div className='grid lg:grid-cols-2 mt-6 gap-y-8 lg:gap-x-16'>

        {/* Image Container */}
        <div className='relative h-full '>
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            className='rounded-xl object-cover shadow-sm'
          />
        </div>

        {/* Product Info Container */}
        <div className='flex flex-col'>
          {/* 1. العنوان وزر المفضلة في سطر واحد */}
          <div className='flex justify-between items-center mb-2'>
            <h1 className='capitalize text-3xl font-bold text-foreground'>{product.name}</h1>
            <FavoriteToggleButton prodcutId={product.id} />
          </div>

          {/* 2. التقييم (سيكون النجوم بجانب الرقم بداخل مكون ProductRating) */}
          <div className='flex items-center gap-x-2'>
             <ProductRating productID={product.id} />
          </div>

          {/* 3. السعر (ينزل أسفل التقييم مباشرة) */}
          <div className='mt-4'>
            <span className='text-xl font-semibold p-2 px-4 rounded-lg bg-muted text-primary inline-block'>
              {dollarAmount}
            </span>
          </div>

          {/* 4. الوصف */}
          <p className='mt-8 text-lg leading-8 text-muted-foreground'>
            {product.description}
          </p>

          {/* 5. زر الإضافة للسلة */}
          <div className='mt-auto pt-8'>
            <AddCart productID={product.id} />
          </div>
        </div>

      </div>
    </section>
  )
}

export default ProdectesDetailsPage