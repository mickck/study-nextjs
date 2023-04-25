"use client";
import { useState } from "react";

export default function List() {
  let products = ["Tomato", "Pasta", "Coconut"];
  const [count, setCount] = useState([0, 0, 0]);

  return (
    <div>
      <h3 className="">List of the products</h3>
      {products.map((product, i) => (
        <div className="food" key={i}>
          <img src={`/food${i}.png`} />
          <h4>{product} $40</h4>
          <span>total: ${count[i]}</span>
          <button
            onClick={() => {
              let copy = [...count];
              copy[i]++;
              setCount(copy);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              if (count[i] > 0) {
                let copy = [...count];
                copy[i]--;
                setCount(copy);
              }
            }}
          >
            -
          </button>
        </div>
      ))}
    </div>
  );
}
