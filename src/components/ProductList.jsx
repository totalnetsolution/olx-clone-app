import React from 'react';
import Card from './Card';

const products = [
  {
    id: 1,
    title: 'Laptop',
    description: 'High-performance laptop for sale.',
    price: '$999',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Smartphone',
    description: 'Latest smartphone with advanced features.',
    price: '$599',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Headphones',
    description: 'Noise-cancelling wireless headphones.',
    price: '$199',
    image: 'https://via.placeholder.com/150',
  },
];

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {products.map(product => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
