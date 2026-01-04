import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { VscAccount } from 'react-icons/vsc'
import { Links } from '@/utils/Link'


function Logo() {
  return (
   <Button  size={'icon'} asChild>
    <Link href={Links.HOME.href}>
     <VscAccount  />
    </Link>
   </Button>
  )
}

export default Logo