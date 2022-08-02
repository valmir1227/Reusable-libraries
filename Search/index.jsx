import { useMemo, useState } from "react";

const products = [
  "Brush",
  "Shoe",
  "Shirt",
  "Pants",
  "Tv",
  "PlayStation4",
  "Computer",
  "Notebook",
];
export default function App() {
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    const lowerSearch = search.toLowerCase();
    return products.filter((product) =>
      product.toLowerCase().includes(lowerSearch)
    );
  }, [search]);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <input
        type="text"
        value={search}
        placeholder="Search"
        onChange={(event) => setSearch(event.target.value)}
      />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product}>{product}</li>
        ))}
      </ul>
    </div>
  );
}
