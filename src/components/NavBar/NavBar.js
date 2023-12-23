import React, { useEffect, useContext, useState } from 'react';
import { NavLink, Link, useParams } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget'; 
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import logo from '../CartWidget/assets/Logo.svg';
import './NavBar.css';
import { CartContext } from '../../context/CartContext';

const NavBar = () => {
  const { category = 'all' } = useParams();
  const { cart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productosRef = collection(db, 'productos');
        let response;

        if (category && category !== 'all') {
          const q = query(productosRef, where('category', '==', category));
          const querySnapshot = await getDocs(q);
          response = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        } else {
          const querySnapshot = await getDocs(productosRef);
          response = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        }

        console.log('Fetched data:', response);
        setProducts(response);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [category]);

  console.log('Category:', category);
  console.log('Fetched data:', products);

  return (
    <nav className='NavBar'>
      <Link to='/'>
        <img src={logo} alt='Logo' className='Logo' />
      </Link>
  
      <div className='Categories'>
        <NavLink to='/category/chocolate' className='Option' activeclassname='ActiveOption'>
          Chocolates
        </NavLink>
        <NavLink to='/category/bombones' className='Option' activeclassname='ActiveOption'>
          Bombones
        </NavLink>
        <NavLink to='/category/boxes' className='Option' activeclassname='ActiveOption'>
          Boxes
        </NavLink>
      </div>
  
      <div className='CartWidgetContainer'>
        <Link to='/cart'>
          <CartWidget totalItems={cart.totalQuantity} />
        </Link>
      </div>
    </nav>
  ); 
};

export default NavBar;
