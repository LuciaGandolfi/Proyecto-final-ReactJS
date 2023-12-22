const products = [
  {
    id: '1',
    name: 'Chocolate con almendras',
    price: 380,
    category: 'chocolate',
    img: '/assets/chocolate1.png',
    stock: 25,
    description: 'Chocolate con almendras',
  },
  { id: '2', name: 'Chocolate blanco', price: 300, category: 'chocolate', img: '/assets/chocolate1.png', stock: 20, description: 'Chocolate blanco' },
  { id: '3', name: 'Chocolate con sal marina', price: 380, category: 'chocolate', img: '/assets/chocolate1.png', stock: 10, description: 'Chocolate con sal marina' },
  { id: '4', name: 'Chocolate negro', price: 400, category: 'chocolate', img: '/assets/chocolate1.png', stock: 2, description: 'Chocolate negro' },

  { id: '5', name: 'Bombón de chocolate con almendra', price: 150, category: 'bombones', img: '/assets/bombon1.png', stock: 20, description: 'Bombon de chocolate con almendras' },
  { id: '6', name: 'Bombón de chocolate con caramelo', price: 120, category: 'bombones', img: '/assets/bombon2.png', stock: 10, description: 'Bombon de chocolate con caramelo' },
  { id: '7', name: 'Bombón de chocolate blanco', price: 130, category: 'bombones', img: '/assets/bombon3.png', stock: 10, description: 'Bombon de chocolate blanco' },
  
  {
    id: '8',
    name: 'Caja de chocolates y bombones surtidos',
    price: 500,
    category: 'boxes',
    img: '/assets/box1.png',
    stock: 15,
    description: 'Combo que incluye bombones y chocolates surtidos',
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductsbyCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredProducts = products.filter((prod) => prod.category === categoryId);
      resolve(filteredProducts);
    }, 500);
  });
};

export const getProductsById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};