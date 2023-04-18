export default function Cart() {
  let cart = ["Tomato", "Pasta", "Potato"];

  return (
    <div>
      <h3 className="title" style={{ paddingBottom: "40px" }}>
        Cart
      </h3>
      {cart.map((item, i) => (
        <div key={i}>
          <CartItem name={item} />
        </div>
      ))}
    </div>
  );
}

function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.name}</p>
      <p>$40</p>
      <p>1</p>
    </div>
  );
}
