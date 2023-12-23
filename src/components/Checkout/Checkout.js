import { CartContext } from "../../context/CartContext";
import { collection, query, where, Timestamp, documentId, getDocs, writeBatch, doc } from "firebase/firestore";
import { db } from '../firebase/config';
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { useContext, useState } from "react";


const Checkout = () => {
    const { cart, total, clearCart } = useContext(CartContext);
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState(null);

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);

        try {
            const objOrder = {
                buyer: {
                    name,
                    phone,
                    email
                },
                items: cart.items || [],
                total: total || 0,
                date: Timestamp.fromDate(new Date())
            };
            
            const batch = writeBatch(db);
            const outOfStock = [];
            const ids = cart.items.map(prod => prod.id);
            const productosRef = collection(db, 'productos');

            const productsAddedFromFirestore = await getDocs(
                query(productosRef, where('id', 'in', ids))
            );

            productsAddedFromFirestore.forEach((doc) => {
                const product = doc.data();
                const quantityInCart = cart.find((item) => item.id === doc.id).quantity;

                if (product.stock < quantityInCart) {
                    outOfStock.push(doc.id);
                } else {
                    const productRef = doc(productosRef, doc.id);
                    batch.update(productRef, { stock: product.stock - quantityInCart });
                }
            });

            if (outOfStock.length === 0) {
                const orderRef = doc(collection(db, 'orders'));
                batch.set(orderRef, objOrder);
                await batch.commit();
                setOrderId(orderRef.id);
                clearCart();
            } else {
                console.error("Algunos productos están fuera de stock:", outOfStock);
            }

        } catch (error) {
            console.error("Error al crear la orden:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <h1>Se está generando su orden...</h1>;
    }

    if (orderId) {
        return <h1>El id de su orden es: {orderId}</h1>;
    }

    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    );
};

export default Checkout;