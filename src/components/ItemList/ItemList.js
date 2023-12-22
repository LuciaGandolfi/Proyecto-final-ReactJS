import React, { useEffect, useState } from 'react';
import './ItemList.css';
import Item from '../Item/Item';

const ItemList = ({ category, products }) => {
  console.log('ItemList received products:', products);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    console.log(`Fetched products for category: ${category}`);

    const filtered = products.filter(
      (prod) => (!category || prod.category === category) && prod.stock > 0
    );
    console.log('Filtered products:', filtered);
    setFilteredProducts(filtered);
  }, [category, products]);

  console.log(`Rendered ItemList with products: ${JSON.stringify(filteredProducts)}`);

  return (
    <div className='ListGroup'>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((prod) => <Item key={prod.id} {...prod} />)
      ) : (
        <p>No hay productos disponibles.</p>
      )}
    </div>
  );
};

export default ItemList;
