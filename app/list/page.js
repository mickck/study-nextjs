export default function List() {
  let products = ["Tomato", "Pasta", "Coconut"];
  return (
    <div>
      <h3 className="">List of the products</h3>
      {products.map((product, i) => (
        <div className="food" key={i}>
          <img src={`/food${i}.png`} />
          <h4>{product} $40</h4>
        </div>
      ))}
    </div>
  );
}
