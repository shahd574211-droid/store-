'use server'
import { redirect } from 'next/navigation'
import db from './db'

export async function fetchFeaturedProduct(){
    const product = await db.prodect.findMany({
        where : {
            featured:true,
        }
    })
    return product
}

export async function featchAllProdect({search = ''}:{search :string}) {
      const product = await db.prodect.findMany({

        where:{
            OR:[
                {
                name :{contains:search , mode:'insensitive'}
                }
                ]
               },



        orderBy : {
            createdAt:"desc"
        }
    })
     
    return product;

 }

//  find product

export async function fetchSingleProduct(productId:string) {
    const product = await db.prodect.findUnique({
        where :{
            id :productId
        },
    })
    if (!product){
        redirect('/prodcuts')
    }
    return product;
}
