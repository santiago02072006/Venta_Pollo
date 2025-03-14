import React, { useState } from "react";

const products = [
  { id: 1, name: "Pollo Entero", price: 120000, image: "🐔" },
  { id: 2, name: "Pechuga de Pollo", price: 90000, image: "🍗" },
  { id: 3, name: "Alitas de Pollo", price: 70000, image: "🍖" },
  { id: 4, name: "Muslos de Pollo", price: 85000, image: "🍗" },
];

const ChickenStore = () => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const login = () => {
    setUser({ name: "Cliente" });
  };

  const logout = () => {
    setUser(null);
    setCart([]);
  };

  const checkout = () => {
    alert("Compra realizada con éxito!");
    setCart([]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1
        style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}
      >
        🐔 Venta de Pollos
      </h1>

      <div style={{ marginBottom: "20px" }}>
        {user ? (
          <>
            <p>Bienvenido, {user.name}!</p>
            <button
              onClick={logout}
              style={{
                marginLeft: "10px",
                padding: "5px 10px",
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Cerrar sesión
            </button>
          </>
        ) : (
          <button
            onClick={login}
            style={{
              padding: "8px 12px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Iniciar sesión
          </button>
        )}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              textAlign: "center",
              borderRadius: "8px",
            }}
          >
            <div style={{ fontSize: "50px", marginBottom: "10px" }}>
              {product.image}
            </div>
            <h2 style={{ fontSize: "18px", fontWeight: "bold" }}>
              {product.name}
            </h2>
            <p style={{ color: "#555" }}>
              ${product.price.toLocaleString()} COP
            </p>
            <button
              style={{
                marginTop: "10px",
                padding: "8px 12px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
              onClick={() => addToCart(product)}
              disabled={!user}
            >
              🛒 Agregar al Carrito
            </button>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: "40px", fontSize: "22px", fontWeight: "bold" }}>
        🛒 Carrito de Compras
      </h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              {item.image} {item.name} - ${item.price.toLocaleString()} COP
              <button
                style={{
                  marginLeft: "10px",
                  padding: "5px 10px",
                  backgroundColor: "#dc3545",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
                onClick={() => removeFromCart(index)}
              >
                ❌ Quitar
              </button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <button
          onClick={checkout}
          style={{
            marginTop: "20px",
            padding: "10px 15px",
            backgroundColor: "#ffc107",
            color: "black",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          🛍️ Finalizar Compra
        </button>
      )}
    </div>
  );
};

export default ChickenStore;
