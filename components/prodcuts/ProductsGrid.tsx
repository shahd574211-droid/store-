import { prodect } from '@prisma/client'
import Link from 'next/link'
import {Links} from '@/utils/Link'
import React from 'react'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'
import {formatCurrency} from '@/utils/format'
import FavoriteToggleButton from './FavoriteToggleButton'



function ProductsGrid({products} : {products:prodect[]}) {

 
  return (
    <section className=' pt-12 grid md:grid-cols-2 gap-4 lg:grid-cols-3'>
   {
    products.map ((prodcut) => {
      const dollarAmont= formatCurrency(prodcut.price)
      const prodcutId = prodcut.id
      const prodcutName =prodcut.name 

      return(
         <div className=' group  relative ' key={prodcut.id}>
            <Link  href={`${Links.PRODUCTS.href}/${prodcutId}`}>
              <Card className=' transform group-hover:shadow-xl transition-shadow duration-500'>
                <CardContent>

                <div className=' relative h-64 md:h-48 rounded overflow-hidden'>
                <Image 
                src={prodcut.image}
                alt='product_img'
                fill
                sizes="(max-width:768px) 100vw ,(max-width:1200px) 50vw ,33vw"
                className=' object-cover'
                />
                </div>

                <div className='mt-4 text-center'> 
                  <h2 className='text-lg capitalize'>{prodcutName}</h2>
                  <p className='text-muted from-foreground mt-2'>
                    {dollarAmont}
                  </p>
                </div> 
              
                </CardContent>
              </Card>
            </Link>
            

             

      <div className=' absolute top-7 right-7 z-5 bg-blue-400 '>
        <FavoriteToggleButton prodcutId={prodcutId}  />
      </div>
         </div>

         

      )
    })

   };
    </section>
  )
}

export default ProductsGrid