import React from 'react';
import { useParams, Link } from 'react-router-dom';
import allProducts from '../data/ProductsData';

const CategoryPage = () => {
  const { categoryName } = useParams();

  // Filter by category from URL param
  const filteredProducts = allProducts.filter(
    (product) => product.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto bg-slate-100">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center ">
        {categoryName} section
      </h2>

      {filteredProducts.length > 0 ? (
   <div
  className={`grid gap-4 ${
    ['rivets', 'anchors'].includes(categoryName.toLowerCase())
      ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
      : 'grid-cols-2 md:grid-cols-4'
  }`}
>
  {filteredProducts.map((product) => (
    <Link to={`/product/${product.id}`} key={product.id}>
      <div className="relative rounded-xl shadow-sm hover:shadow-xl hover:shadow-gray-500 transition overflow-hidden group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 sm:h-44 md:h-[355px] object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110 active:scale-110"
        />
        <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-center py-2">
          <h3 className="text-sm font-semibold">{product.name}</h3>
        </div>
      </div>
    </Link>
  ))}
</div>

      ) : (
        <p className="text-center text-slate-500 text-lg">
          No products found in this category.
        </p>
      )}
    </section>
  );
};

export default CategoryPage;
