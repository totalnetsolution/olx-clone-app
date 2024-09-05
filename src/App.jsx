import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto px-4">
        <h1 className="text-center text-4xl font-bold my-8">Browse Products</h1>
        <ProductList />
      </div>
      <Footer />
    </div>
  );
};

export default App;
