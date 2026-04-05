// products.js
export const productsData = [
  {
    id: "club-hoodie",
    name: "Club Hoodie",
    price: "200 DH",
    defaultImg: "/hoodie.jpg", // Fallback for the main page
    desc: "Warm hoodie with our cybersecurity club logo.",
    hasColors: true,
    colors: ["black", "white", "dark purple"],
    images: {
      "black": ["/hoodie-black-1.jpg", "/hoodie-black-2.jpg"],
      "white": ["/hoodie-white-1.jpg", "/hoodie-white-2.jpg"],
      "dark purple": ["/hoodie-purple-1.jpg", "/hoodie-purple-2.jpg"]
    }
  },
  {
    id: "club-tshirt",
    name: "Club T-Shirt",
    price: "120 DH",
    defaultImg: "/tshirt.jpg",
    desc: "Comfortable cotton t-shirt with club branding.",
    hasColors: true,
    colors: ["black", "white", "dark purple"],
    images: {
      "black": ["/tshirt-black-1.jpg", "/tshirt-black-2.jpg"],
      "white": ["/tshirt-white-1.jpg", "/tshirt-white-2.jpg"],
      "dark purple": ["/tshirt-purple-1.jpg", "/tshirt-purple-2.jpg"]
    }
  },
  {
    id: "cyber-stickers",
    name: "Cyber Sticker Pack",
    price: "30 DH",
    defaultImg: "/stickers.jpeg",
    desc: "Set of cool cybersecurity themed stickers.",
    hasColors: false,
    images: {
      "default": ["/stickers.jpeg", "/stickers-2.jpeg"] // Multiple angles if you have them
    }
  },
  {
    id: "club-badge",
    name: "Club Badge",
    price: "20 DH",
    defaultImg: "/badge.jpeg",
    desc: "Metal badge featuring the club logo.",
    hasColors: false,
    images: {
      "default": ["/badge.jpeg", "/badge-back.jpeg"]
    }
  }
];