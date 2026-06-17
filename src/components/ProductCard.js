import { Link } from 'react-router-dom';

function ProductCard({ id, title, price, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>Ksh{price}</p>
      <Link to={`/product/${id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
}

export default ProductCard;
