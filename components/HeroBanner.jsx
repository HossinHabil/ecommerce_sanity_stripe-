import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const HeroBanner = ({
  heroBanner: {
    smallText,
    midText,
    largeText1,
    image,
    product,
    buttonText,
    desc,
  },
}) => {
  return (
    <div className="hero-banner-container">
      <p className="beats-solo">{smallText}</p>
      <h3>{midText}</h3>
      <h1>{largeText1}</h1>
      <img src={urlFor(image)} alt={desc} className="hero-banner-image" />
      <div>
        <Link href={`/product/${product}`}>
          <button type="button">{buttonText}</button>
        </Link>
      </div>
      <div className="desc">
        <h5>Descriptipn</h5>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default HeroBanner;
