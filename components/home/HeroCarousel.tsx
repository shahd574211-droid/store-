import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


import Image from 'next/image'
import db from '@/utils/db'

 async function HeroCarousel() {

  const hero=  await db.prodect.findMany();

  console.log(hero)
  return (
    <div className='lg:block hidden'>
      <Carousel>
        <CarouselContent>
         {
         hero.map((item :{ id: string; image: string; name?: string }) => (
             <CarouselItem key={item.id}>
            <div className='p-2'>
             <Image
               src={item.image}
               width={400}
               height={400}
               priority
               alt='hero image'
               className='object-cover w-full h-[400] rounded-lg '
             />
            </div>
            
          </CarouselItem>
          ))
         }
       </CarouselContent>
       <CarouselPrevious />
       <CarouselNext />


      </Carousel>
    </div>
  )
}

export default HeroCarousel