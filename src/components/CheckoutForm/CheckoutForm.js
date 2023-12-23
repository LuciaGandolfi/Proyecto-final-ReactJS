import './CheckoutForm.css';
import { useState } from 'react';

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
  
    const handleConfirm = (event) => {
        event.preventDefault();
      
        const userData = {
          name,
          phone,
          email
        };
      
        console.log('User Data:', userData); 
      
        onConfirm(userData);
      };
  
    return (
      <div className='Container'>
        <form onSubmit={handleConfirm} className='Form'>
          <label className='Label'>
            Nombre
            <input
              className='Input'
              type='text'
              value={name}
              onChange={({ target }) => setName(target.value)}  
            />
          </label>
          <label className='Label'>
            Teléfono
            <input
              className='Input'
              type='text'
              value={phone}
              onChange={({ target }) => setPhone(target.value)}
            />
          </label>
          <label className='Label'>
            Correo Electrónico
            <input
              className='Input'
              type='text'
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </label>
          <button type='submit' className='Button'>
            Crear Orden
          </button>
        </form>
      </div>
    );
  };
  
  export default CheckoutForm;