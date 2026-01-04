import React from 'react'
import { cn } from '@/lib/utils'

type EmptyListProps ={
  title: string,
  className?: string
}

function EmptyList({title, className}:EmptyListProps) {
  return (
    <h2 className= {cn('text-xl' , className)}>  EmptyList</h2>
  )
}

export default EmptyList