import React from 'react'
import SectionTitle from '../global/SectionTitle'
import ProductsGrid from '../prodcuts/ProductsGrid'
import {fetchFeaturedProduct} from '@/utils/action'
import EmptyList from '../global/EmptyList'

 async function FeaturedProdects() {
  const featured_p =await fetchFeaturedProduct()

if (featured_p.length === 0)return <EmptyList  title="add new products"/>

  return (
   <section className='pt-24'>
    <SectionTitle text='featuted products'/>
    <ProductsGrid products={featured_p}/>

   </section>
  )
}

export default FeaturedProdects