import React from 'react'
import { Button } from '../ui/button'

function AddCart({productID}:{productID:string}) {
  return (
    <Button className=' capitalize mt-8' size={'lg'}>
        at to cart
    </Button>
  )
}

export default AddCart