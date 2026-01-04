"use client"
import React, { useState } from 'react'
import { Input } from '../ui/input'
import { useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce';
import { Links } from '@/utils/Link';


function NavSearch() {

  const searchParams = useSearchParams();
  const [search , setSearch] = useState(searchParams.get("search")?.toString() || "" );
  const {replace} = useRouter()

  const handleSearch = useDebouncedCallback((value:string) =>{
    const params = new URLSearchParams(searchParams)

    if (value){
      params.set('search' , value)
    }
    else{
      params.delete('search')
    }

    replace(`${Links.PRODUCTS.href}?${params.toString()}`)

  },300)

  return (
    <Input
    type='search'
    placeholder='search ...'
    className='max-w-xs dark:bg-muted'
    value={search}
    onChange={(e) => {
      setSearch(e.target.value)
      handleSearch(e.target.value)
    }}
    />
  )
}

export default NavSearch