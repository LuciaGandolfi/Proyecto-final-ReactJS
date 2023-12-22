import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useParams } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    console.log('Fetching data for item ID:', itemId);
  
    const docRef = doc(db, 'productos', itemId);
  
    getDoc(docRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          console.log('Product data:', docSnap.data());
          setProduct({ ...docSnap.data(), id: docSnap.id });
        } else {
          console.log('Product not found');
          setError('Producto no encontrado');
        }
      })
      .catch((error) => {
        console.error(error);
        setError('Error al cargar el producto');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className='ItemDetailContainer'>
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
