import { useState } from 'react';
import ProductCard from '../components/ProductCard';

function ShopPage() {
  // Sample product data (later you can fetch from API)
  const products = [
    { id: 1, title: "Gaming Laptop", price: 1200, brand: "Dell", category: "laptops", image: "/images/laptop.jpg" },
    { id: 2, title: "Mechanical Keyboard", price: 150, brand: "Logitech", category: "peripherals", image: "/images/keyboard.jpg" },
    { id: 3, title: "Graphics Card", price: 600, brand: "NVIDIA", category: "components", image: "/images/gpu.jpg" },
    { id: 4, title: "Office Laptop", price: 800, brand: "HP", category: "laptops", image: "/images/hp.jpg" },
  ];

  // Filter states
  const [category, setCategory] = useState("all");
  const [brand, setBrand] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 2000]);

  // Filtering logic
  const filteredProducts = products.filter(p => {
    const categoryMatch = category === "all" || p.category === category;
    const brandMatch = brand === "all" || p.brand === brand;
    const priceMatch = p.price >= priceRange[0] && p.price <= priceRange[1];
    return categoryMatch && brandMatch && priceMatch;
  });

  return (
    <div className="shop-page">
      {/* Filters */}
      <aside className="filters">
        <h2>Filters</h2>

        <label>Category:</label>
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="components">Components</option>
          <option value="peripherals">Peripherals</option>
        </select>

        <label>Brand:</label>
        <select onChange={(e) => setBrand(e.target.value)}>
          <option value="all">All</option>
          <option value="Dell">Dell</option>
          <option value="HP">HP</option>
          <option value="Logitech">Logitech</option>
          <option value="NVIDIA">NVIDIA</option>
        </select>

        <label>Price Range:</label>
        <input type="range" min="0" max="2000" step="100"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([0, Number(e.target.value)])}
        />
        <p>Up to Ksh{priceRange[1]}</p>
      </aside>

      {/* Product Grid */}
      <section className="product-grid">
        {filteredProducts.map(p => (
          <ProductCard key={p.id} {...p} />
        ))}
      </section>
    </div>
  );
}

export default ShopPage;

