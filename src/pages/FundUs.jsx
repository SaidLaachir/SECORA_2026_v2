import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { productsData } from "/src/data/products.js";

export default function FundUs({ theme }) {
  const supportReasons = [
    {
      title: "Workshops & Training",
      desc: "Your support helps us organize cybersecurity workshops and hands-on technical training sessions for students."
    },
    {
      title: "CTF Competitions",
      desc: "We participate in Capture The Flag competitions and cybersecurity challenges to develop real-world security skills."
    },
    {
      title: "Community Growth",
      desc: "Funds allow us to expand our community, host events, invite speakers, and create opportunities for students."
    }
  ];

  return (
    <div className="w-full animate-fade-in pt-24 md:pt-32 pb-16 space-y-24">

      {/* HEADER */}
      <section className="text-center space-y-4 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Support Our Club
        </motion.h1>

        <p className={`max-w-2xl mx-auto text-base md:text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
          Help support our cybersecurity club by purchasing our merchandise.
          All funds help us organize workshops, competitions, and educational cybersecurity activities.
        </p>
      </section>

      {/* WHY SUPPORT US */}
      <section className="px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
          Why Support Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {supportReasons.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className={`p-6 rounded-xl transition shadow-lg ${theme === "dark" ? "bg-gray-900 border border-gray-800" : "bg-white border"}`}
            >
              <h3 className="text-lg md:text-xl font-semibold mb-3">{item.title}</h3>
              <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
          Products Available
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {productsData.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.05 }}
              className={`rounded-xl overflow-hidden shadow-lg transition flex flex-col ${theme === "dark" ? "bg-gray-900 border border-gray-800" : "bg-white border"}`}
            >
              <img
                src={product.defaultImg}
                alt={product.name}
                className="h-44 md:h-48 w-full object-cover"
              />

              <div className="p-4 space-y-2 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold">{product.name}</h3>
                  <p className={`text-sm mt-1 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                    {product.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <p className="font-bold text-cyan-500">{product.price}</p>
                  
                  <Link 
                    to={`/product/${product.id}`}
                    className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-medium rounded-lg transition"
                  >
                    View
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ORDER SECTION */}
      <section className="space-y-6 text-center px-4 mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Place Your Order</h2>
        <p className={`max-w-2xl mx-auto text-sm md:text-base ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
          To order one of our products, please fill out the form below.
          Our team will contact you to confirm your order.
        </p>

        <div className={`p-4 md:p-6 rounded-xl max-w-3xl mx-auto ${theme === "dark" ? "bg-gray-900 border border-gray-800" : "bg-white border"}`}>
          <p className="mb-4 font-semibold text-yellow-500 text-sm md:text-base">
            Payment Method: Payment is made in person when the product is delivered to you.
          </p>

          {/* GOOGLE FORM */}
          <div className="w-full h-[650px] md:h-[600px]">
            <iframe
              title="Order Form"
              src="https://docs.google.com/forms/d/e/1FAIpQLSegPiLfoyTL_TS6bcvq8t91rPOZObHNAzw0xuKx4N-TVii89A/viewform?usp=publish-editor/viewform?embedded=true"
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              className="rounded-lg"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>

    </div>
  );
}