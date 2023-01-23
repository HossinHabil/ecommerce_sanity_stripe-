import React from 'react';
import Link from "next/link";

import { urlFor } from '../lib/client';
// we will use it to get the url for the image inside of our sanity dashboard

const Product = ({ product: {image, name, slug, price} }) => {
  // const { image, name, slug, price } = product;
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img 
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className='product-price'>{price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product
