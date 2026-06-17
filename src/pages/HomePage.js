import CategoryGrid from '../components/CategoryGrid';

function HomePage() {
  return (
    <div>
      <section className="hero">
        <h1>Power Your Setup with MoreeTech</h1>

        <button>Shop Now</button>
      </section>

      <section className="deals">
        <h2>Featured Deals</h2>

        <div className="deal-cards">
          {/* Product cards go here */}
        </div>
      </section>

      <CategoryGrid />
    </div>
  );
}

export default HomePage;