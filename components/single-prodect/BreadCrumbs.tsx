import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Links } from '@/utils/Link'

function BreadCrumbs({name}:{name:string}) {
  return (
   <Breadcrumb>
  <BreadcrumbList>

    <BreadcrumbItem>
      <BreadcrumbLink href={Links.HOME.href} className=' capitalize text-lg'>Home</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href={Links.PRODUCTS.href}className=' capitalize text-lg'>products</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />

    <BreadcrumbItem>
      <BreadcrumbPage className=' capitalize text-lg' >{name}</BreadcrumbPage>
     
    </BreadcrumbItem>

  </BreadcrumbList>
</Breadcrumb>
  )
}

export default BreadCrumbs