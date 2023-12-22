import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, name, img, price, stock, category }) => {
    console.log(`Rendering Item Component for product ID: ${id}`);

  return (
    <article className='CardItem'>
      <header className="Header">
        <h2 className="ItemHeader">
          {name}
        </h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg"/>
      </picture>
      <section>
        <p className="Info">
          Precio: ${price}
        </p>
        <p className="Info">
          Stock disponible: {stock}
        </p>
        <p className="Info">
          Categoría: {category}
        </p>
      </section>
      <footer className= 'Itemfooter'>
        <Link to={`/item/${id}`} className='Option'>Ver detalle</Link>
      </footer>
    </article>
  );
}

export default Item;
