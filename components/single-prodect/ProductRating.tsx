import React from 'react'
import { FaStar } from 'react-icons/fa';

function ProductRating({productID}:{productID:string}) {

    const rating =4.2;
    const reviews = 42;
    const reviewsText = `(${reviews}) Reviews`

  return (
    <span>
        <FaStar  className='w-3 h-3'/> 

        {rating} {reviewsText}
    </span>
  )
}

export default ProductRating