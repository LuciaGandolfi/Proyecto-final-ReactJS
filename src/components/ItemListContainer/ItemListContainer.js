import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    setLoading(true);

    const productosRef = category && category !== 'all'
      ? query(collection(db, 'productos'), where('category', '==', category))
      : collection(db, 'productos');

    getDocs(productosRef)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsAdapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [category]);

  return (
    <div className="container">
      <h1>{greeting}</h1>
      {loading ? (
        <p className="loading-message">Cargando...</p>
      ) : (
        <ItemList category={category} products={products} />
      )}
    </div>
  );
};

export default ItemListContainer;
