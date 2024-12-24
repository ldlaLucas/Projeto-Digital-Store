import React from "react";
import "./styles.css";
import { useCart } from "../../components/ShoppingCart/ShoppingCart";
import Layout from "../../components/Layout/Layout";
import ProductCard from "../../components/ProductCard/ProductCard";

const OrdersPage = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <Layout>
      <h1>Meus Pedidos</h1>
      <div className="orders-list">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="order-item">
              <ProductCard
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
                priceDiscount={item.priceDiscount}
              />
              <button onClick={() => removeFromCart(item.id)}>Remover</button>
            </div>
          ))
        ) : (
          <p>Seu carrinho está vazio.</p>
        )}
      </div>
    </Layout>
  );
};
export default OrdersPage;
