import React, { Suspense } from 'react'
import HeroCarousel from './HeroCarousel'
import { Button } from '../ui/button'
import Link from 'next/link'
import {LoadingHero }from '../global/LoadingContainer'

function Hero() {
  return (
   <section className=' pt-24 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
    <div>
      <h1 className='max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl'>
       we are change the way pepole shop
      </h1>
      <p className='mt-8 max-w-xl text-lg leading-8 text-muted-foreground'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quasi soluta dicta deleniti tempora, iusto sapiente deserunt fugit architecto temporibus quisquam cum, tenetur eligendi saepe molestiae provident, repudiandae perspiciatis. Veniam?
      </p>
      <Button  className=' mt-10 bg-blue-500 text-white size' size ={'lg'} asChild>

        <Link href={'./prodcuts'}>
        OUR PRODUCTE
        </Link>

      </Button>

    </div>

   <Suspense fallback ={<LoadingHero />}>
     <HeroCarousel />
   </Suspense>
   </section>
  )
}

export default Hero