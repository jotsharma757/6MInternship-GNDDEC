import { useSelector, useDispatch } from "react-redux";
import { removeCart } from "./1Cart";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  // Calculate total price
  const totalPrice = cartItems.reduce((sum, item) => {
    return sum + item.price * item.count;
  }, 0);

  return (
    <div>
      <h2>Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} style={{ marginBottom: "10px" }}>
            <strong>{item.title}</strong> - ₹{item.price} x {item.count}

            <button
               
              onClick={() => dispatch(removeCart(item.id))}
            >
              Remove
            </button>
          </div>
        ))
      )}

      <h3>Total Price: ₹{totalPrice}</h3>
    </div>
  );
}

export default Cart;