import React from 'react';
import { Package, Wrench, Settings, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import bolts from '../img/Other/bolts.webp';
import anchors from '../img/Other/anchors.webp';
import nuts from '../img/Other/nuts.webp';
import rivets from '../img/Other/rivets.webp';
import screws from '../img/Other/screws.webp';
import washers from '../img/Other/washers.webp';
import studrods from '../img/Other/stud&rods.png';

const Products = () => {
  const products = [
   

  ];

  const categories = [
    {
      name: "Bolts",
      img: <img src={bolts} className="w-full h-auto object-cover rounded-lg" alt="Bolts" />,
    },
    {
      name: "Screws",
      img: <img src={screws} className="w-full h-auto object-cover rounded-lg" alt="Screws" />,
    },
    {
      name: "Nuts",
      img: <img src={nuts} className="w-full h-auto object-cover rounded-lg" alt="Nuts" />,
    },
    {
      name: "Washers",
      img: <img src={washers} className="w-full h-auto object-cover rounded-lg" alt="Washers" />,
    },
    {
      name: "Rivets",
      img: <img src={rivets} className="w-full h-auto object-cover rounded-lg" alt="Rivets" />,
    },
    {
      name: "Anchors",
      img: <img src={anchors} className="w-full h-auto object-cover rounded-lg" alt="Anchors" />,
    },
     {
      name: "Stud & Rods",
      img: <img src={studrods} className="w-full h-auto object-cover rounded-lg" alt="Stud & Rods" />,
    }
  ];

  return (
    <section id="products" className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Products</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Premium quality fasteners and industrial materials for global markets
          </p>
        </div>

        {/* Product Categories */}
       <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-16 ">
  {categories.map((category, index) => (
    <Link to={`/category/${category.name.toLowerCase()}`} key={index}>
      <div className="max-w-[220px] m-3 md:max-w-[240px] lg:max-w-[410px] w-full mx-auto group cursor-pointer  rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-gray-500 transition-all duration-300  ">
        <div className="aspect-square w-full h-40 bg-white shadow-xl ">
          {React.cloneElement(category.img, {
            className: "w-full h-full object-contain p-2"
          })}
        </div>
        <div className="bottom-0 w-full bg-black bg-opacity-60 text-white text-center py-2">
          <h3 className="text-base font-semibold">{category.name}</h3>
        </div>
      </div>
    </Link>
  ))}
</div>

    

      </div>
    </section>
  );
};

export default Products;
