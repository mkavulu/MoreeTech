import { Link } from 'react-router-dom';

function CategoryGrid() {
  const categories = [
    { name: 'Laptops', path: '/shop?category=laptops' },
    { name: 'Accessories', path: '/shop?category=accessories' },
    { name: 'Desktops', path: '/shop?category=desktops' },
    { name: 'Printers', path: '/shop?category=printers' },
    { name: 'Monitors', path: '/shop?category=monitors' },
  ];

  return (
    <section className="categories">
      <h2>Shop by Category</h2>

      <div className="category-grid">
        {categories.map((cat, index) => (
          <Link
            key={index}
            to={cat.path}
            className="category-card"
          >
            <h3>{cat.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CategoryGrid;
