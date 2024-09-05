import React from 'react';

const Card = ({ product }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure><img src={product.image} alt={product.title} /></figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p>{product.description}</p>
        <div className="card-actions justify-end">
          <span className="font-bold text-lg">{product.price}</span>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
