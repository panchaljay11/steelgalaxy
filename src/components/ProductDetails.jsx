import React from 'react';
import { useParams } from 'react-router-dom';
import allProducts from '../data/ProductsData';
import sample from '../img/Other/logo.png';

const ProductDetails = () => {
  const { id } = useParams();
  const product = allProducts.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center py-20 text-slate-600">
        Product not found.
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 bg-slate-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image */}
  <div className='flex justify-center items-center my-16 md:px-8'>
  <div className="w-[350px] h-[250px] md:w-[640px] md:h-[500px]   flex justify-center items-center rounded-xl overflow-hidden  ">
    <img
      src={product.image || sample}
      alt={product.name}
      className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl shadow-gray-300 bg-transparent"
    />
  </div>
</div>



        {/* Details */}
        <div className='mb-10'>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">{product.name}</h2>
          <p className="text-lg text-slate-600 leading-relaxed  mr-2 ">{product.description}</p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
