// import { v4 as uuid } from 'https://jspm.dev/uuid';


const products = {
    data: [
      {
      id: 'r84EAlsBxZ4P58M',
      img: "https://cdna.lystit.com/photos/nordstromrack/485ef97d/represent-BLACK-Relaxed-Fit-Hoodie.jpeg",
      name: "Relaxed Fit Sweatshirt",
      description: "Men Black Relaxed Fit Sweatshirt",
      category: "SweatShirt",
      brand: "H&M",
      sizes: [
        {id: 1, size: "S"},
        {id: 2, size: "M"},
        {id: 3, size: "L"},
        {id: 4, size: "XL"},
        {id: 5, size : "XXL"}
      ],
      oldPrice: 1999,
      newPrice: 999 ,
      discount: 50,
      rating: 4.3,
      inStock: true,
      isProductInExpressDelivery: true,
      isTrending: true,
      isExchangeAvailable: true,
      },
      {
    id: 'I9fPyKG3JbR7XcT',
    img: "https://tse1.mm.bing.net/th?id=OIP.ProcSjR0Iv4Y66jOVuroyQHaJo&pid=Api&P=0&h=180",
    name: "Casual Slim Fit Shirt",
    description: "Men White Casual Slim Fit Shirt",
    category: "Shirts",
    brand: "Zara",
    sizes: [
      { id: 1, size: "S" },
      { id: 2, size: "M" },
      { id: 3, size: "L" },
      { id: 4, size: "XL" }
    ],
    oldPrice: 1499,
    newPrice: 1199,
    discount: 20,
    rating: 4.5,
    inStock: true,
    isProductInExpressDelivery: false,
    isTrending: true,
    isExchangeAvailable: true
  },
      {
    id: 'EnR6VrG1A7aM4wY',
    img: "https://www.blueauraapparels.com/wp-content/uploads/2018/09/Cotton-Polo-T-shirt-for-men.-Plain-Solid-design-with-Collar-navy-blue-front-right.jpg",
    name: "Cotton Polo T-Shirt",
    description: "Men Navy Blue Cotton Polo T-Shirt",
    category: "T-Shirts",
    brand: "Polo Ralph Lauren",
    sizes: [
      { id: 1, size: "S" },
      { id: 2, size: "M" },
      { id: 3, size: "L" },
      { id: 4, size: "XL" }
    ],
    oldPrice: 1899,
    newPrice: 1499,
    discount: 21,
    rating: 4.7,
    inStock: true,
    isProductInExpressDelivery: true,
    isTrending: true,
    isExchangeAvailable: true
  },
      {
    id: 'gDQF2iK6cJyV9Zt',
    img: "https://tse4.mm.bing.net/th?id=OIP.wlhYdQHBLnyi7UNK46RbrQHaLW&pid=Api&P=0&h=180",
    name: "Slim Fit Chinos",
    description: "Men Khaki Slim Fit Chinos",
    category: "Pants",
    brand: "H&M",
    sizes: [
      { id: 1, size: "S" },
      { id: 2, size: "M" },
      { id: 3, size: "L" },
      { id: 4, size: "XL" }
    ],
    oldPrice: 1699,
    newPrice: 1299,
    discount: 24,
    rating: 4.2,
    inStock: true,
    isProductInExpressDelivery: false,
    isTrending: false,
    isExchangeAvailable: true
  },
      {
    id: 'vLgT6aPfMwY2iKR',
    img: "https://tse1.mm.bing.net/th?id=OIP.It_TWMV8FzYNbXtZanGd-gHaFj&pid=Api&P=0&h=180",
    name: "Athletic Sneakers",
    description: "Men Black Athletic Sneakers",
    category: "Shoes",
    brand: "Nike",
    sizes: [
      { id: 1, size: "7" },
      { id: 2, size: "8" },
      { id: 3, size: "9" },
      { id: 4, size: "10" }
    ],
    oldPrice: 2999,
    newPrice: 2499,
    discount: 17,
    rating: 4.9,
    inStock: true,
    isProductInExpressDelivery: true,
    isTrending: true,
    isExchangeAvailable: true
  },
      {
    id: 'Jh8RyNmKqPb3aMx',
    img: "https://tse2.mm.bing.net/th?id=OIP.TmhRs2J1eDi7Fov7yjdY8wHaHa&pid=Api&P=0&h=180",
    name: "Formal Leather Belt",
    description: "Black Formal Leather Belt",
    category: "Accessories",
    brand: "Calvin Klein",
    sizes: [
      { id: 1, size: "30" },
      { id: 2, size: "32" },
      { id: 3, size: "34" },
      { id: 4, size: "36" }
    ],
    oldPrice: 899,
    newPrice: 699,
    discount: 22,
    rating: 4.6,
    inStock: true,
    isProductInExpressDelivery: false,
    isTrending: false,
    isExchangeAvailable: true
  },
      {
    id: 'r3F5nTaLqB7j2Kx',
    img: "https://tse2.mm.bing.net/th?id=OIP.RVtC7q941YjYqDueE8_hTwAAAA&pid=Api&P=0&h=180",
    name: "Crew Neck Sweater",
    description: "Men Gray Crew Neck Sweater",
    category: "Sweaters",
    brand: "Gap",
    sizes: [
      { id: 1, size: "S" },
      { id: 2, size: "M" },
      { id: 3, size: "L" },
      { id: 4, size: "XL" }
    ],
    oldPrice: 1899,
    newPrice: 1499,
    discount: 21,
    rating: 4.0,
    inStock: true,
    isProductInExpressDelivery: true,
    isTrending: false,
    isExchangeAvailable: true
  },
      {
    id: 'Vbn0sLeYpN8K2nW',
    img: "https://cdn.aldi-digital.co.uk/Mens'-Cargo-Shorts-Olive-A.jpg?o=ulrx46CZFZs6D9Czjzr8QPOeL%40oj&V=7QWR&w=400&h=500&p=2&q=81",
    name: "Casual Cargo Shorts",
    description: "Men Olive Casual Cargo Shorts",
    category: "Shorts",
    brand: "Hollister",
    sizes: [
      { id: 1, size: "30" },
      { id: 2, size: "32" },
      { id: 3, size: "34" },
      { id: 4, size: "36" }
    ],
    oldPrice: 1299,
    newPrice: 999,
    discount: 23,
    rating: 4.4,
    inStock: true,
    isProductInExpressDelivery: false,
    isTrending: true,
    isExchangeAvailable: true
  },
      {
    id: 'j7M9xKpRfA3EwVQ',
    img: "https://cdnd.lystit.com/photos/nordstrom/464ec84e/wrangler--Heritage-Denim-Jacket.jpeg",
    name: "Classic Denim Jacket",
    description: "Men Blue Classic Denim Jacket",
    category: "Jackets",
    brand: "Levi's",
    sizes: [
      { id: 1, size: "S" },
      { id: 2, size: "M" },
      { id: 3, size: "L" },
      { id: 4, size: "XL" }
    ],
    oldPrice: 3499,
    newPrice: 2499,
    discount: 28,
    rating: 4.8,
    inStock: true,
    isProductInExpressDelivery: true,
    isTrending: true,
    isExchangeAvailable: true
  }
    ]
     
}

// module.exports = products;
export { products };