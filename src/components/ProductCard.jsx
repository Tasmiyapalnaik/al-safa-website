import { Link } from "react-router-dom";

function ProductCard({ item }) {
  return (
    <Link to={`/product/${item.id}`}>
      <div className="border rounded-xl p-4 shadow-sm hover:shadow-lg transition">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-80 object-cover rounded-lg"
        />

        <h3 className="mt-3 text-lg font-semibold">
          {item.name}
        </h3>

        <p className="text-gray-600">
          {item.price}
        </p>
      </div>
    </Link>
  );
}

export default ProductCard;

