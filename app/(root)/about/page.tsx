import React from 'react'

function aboutPage() {
  return (
    <section>
      <h1 className=' flex flex-wrap gap-2 sm:gap-6 items-center justify-center text-4xl font-bold leading-none tracking-wide sm:text-6xl'>
       we love products
        <span className='bg-blue-500 px-4 py-2 rounded-lg tracking-widest text-amber-50'>
          stor
        </span>
      </h1>
      <p className=' text-center mt-6 text-lg  tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, deserunt qui. Quisquam odit possimus eligendi adipisci vitae quam, pariatur voluptate quibusdam, ullam atque nesciunt debitis nobis hic commodi eos amet. 
      </p>
    </section>
  )
}

export default aboutPage