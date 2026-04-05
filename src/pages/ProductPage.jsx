import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { productsData } from "/src/data/products.js";

export default function ProductPage({ theme }) {
  const { id } = useParams();
  
  const product = productsData.find((p) => p.id === id);
  const initialColor = product?.hasColors ? product.colors[0] : "default";
  
  const [selectedColor, setSelectedColor] = useState(initialColor);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4 px-4 text-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Link to="/fund-us" className="text-cyan-500 hover:underline">Return to Fund Us</Link>
      </div>
    );
  }

  const currentImages = product.images[selectedColor] || [product.defaultImg];

  const colorMap = {
    "black": "#000000",
    "white": "#ffffff",
    "dark purple": "#301934" 
  };

  const nextImage = () => setCurrentImgIndex((prev) => (prev + 1) % currentImages.length);
  const prevImage = () => setCurrentImgIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);

  return (
    <div className={`w-full min-h-screen pt-24 md:pt-32 pb-16 px-4 md:px-8 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
      
      <Link to="/fund-us" className="inline-block mb-8 text-cyan-500 hover:text-cyan-400 font-medium transition">
        &larr; Back to all products
      </Link>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        
        {/* LEFT COL: Image Gallery */}
        <div className="space-y-4 w-full overflow-hidden">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={currentImages[currentImgIndex]} 
            className="relative h-80 md:h-[500px] rounded-2xl overflow-hidden bg-gray-200 shadow-lg"
          >
            <img 
              src={currentImages[currentImgIndex]} 
              alt={`${product.name} in ${selectedColor}`} 
              className="w-full h-full object-cover"
            />
            
            {/* Slider Controls */}
            {currentImages.length > 1 && (
              <>
                <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition">
                  &#10094;
                </button>
                <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition">
                  &#10095;
                </button>
              </>
            )}
          </motion.div>

          {/* Thumbnail Strip (Scrollable on mobile) */}
          {currentImages.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {currentImages.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setCurrentImgIndex(idx)}
                  className={`h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition ${currentImgIndex === idx ? 'border-cyan-500' : 'border-transparent opacity-60 hover:opacity-100'}`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT COL: Product Info */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold">{product.name}</h1>
          <p className="text-2xl font-semibold text-cyan-500">{product.price}</p>
          
          <p className={`text-base md:text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
            {product.desc}
          </p>

          {/* Color Selector */}
          {product.hasColors && (
            <div className="space-y-3 pt-4 border-t border-gray-700">
              <h3 className="font-semibold text-lg">Color: <span className="capitalize text-gray-400">{selectedColor}</span></h3>
              <div className="flex gap-4">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => {
                      setSelectedColor(color);
                      setCurrentImgIndex(0); 
                    }}
                    style={{ backgroundColor: colorMap[color] }}
                    className={`h-10 w-10 rounded-full shadow-md border-2 transition transform hover:scale-110 ${
                      selectedColor === color 
                        ? 'border-cyan-500 ring-2 ring-cyan-500/50 outline-none' 
                        : 'border-gray-400'
                    }`}
                    aria-label={`Select ${color}`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Order Call To Action */}
          <div className="pt-8 w-full">
             <Link 
               to="/fund-us" 
               className="inline-block w-full md:w-auto text-center px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition shadow-lg shadow-cyan-500/30"
             >
               Go to Order Form
             </Link>
             <p className={`mt-3 text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
               Please head back to the main page to fill out the Google Form to complete your order.
             </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}