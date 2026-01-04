"use client";
import React from 'react'
import { prodect } from '@prisma/client'
import Link from 'next/link'
import { Links } from '@/utils/Link'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'
import { formatCurrency } from '@/utils/format'
import FavoriteToggleButton from './FavoriteToggleButton'

function ProductsList({ products }: { products: prodect[] }) {
  return (
    <section className='mt-12 grid gap-y-8'>
      {products.map((product) => {
        const productID = product.id
        const { name, image, price, description } = product;
        const priceFormat = formatCurrency(price)

        return (
          <div className="relative group" key={productID}>
            {/* الحل هنا: الرابط يجب أن يكون متصلاً تماماً بدون أي مسافات */}
            <Link href={`${Links.PRODUCTS.href}/${productID}`}>
              <Card className='transform group-hover:shadow-lg transition-shadow duration-500'>
                <CardContent className='p-8 gap-y-4 grid md:grid-cols-3 items-center'>
                  <div className='relative h-64 md:h-48 md:w-48 rounded overflow-hidden'>
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                      className='object-cover'
                    />
                  </div>
                  <div>
                    <h2 className='text-2xl font-semibold capitalize'>{name}</h2>
                    <p className='text-muted-foreground line-clamp-2'>{description}</p>
                  </div>
                  <div className='flex flex-col md:items-end justify-between gap-y-4'>
                    <p className='text-xl text-blue-600 font-bold'>{priceFormat}</p>
                    {/* منع انتشار الحدث لزر المفضلة لكي لا يفتح صفحة المنتج عند الضغط عليه */}
                    <div onClick={(e) => e.stopPropagation()} className='z-10'>
                      <FavoriteToggleButton prodcutId={productID} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        )
      })}
    </section>
  )
}

export default ProductsList