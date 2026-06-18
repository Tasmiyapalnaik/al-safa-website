import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetail() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2 className="p-10">Product not found</h2>;
  }

  return (
    <div className="max-w-6xl mx-auto p-10">
      <div className="grid md:grid-cols-2 gap-10">
        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-xl"
        />

        <div>
          <h1 className="text-4xl font-bold">
            {product.name}
          </h1>

          <p className="text-2xl mt-4">
            {product.price}
          </p>

          <p className="mt-6 text-gray-600">
            Elegant premium abaya crafted for comfort,
            modesty, and style.
          </p>
          <a
  href={`https://wa.me/919270496107?text=Assalamu Alaikum, I am interested in the ${product.name} priced at ${product.price}. Please share more details.`}
  target="_blank"
  rel="noreferrer"
  className="inline-block mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
>
  Order on WhatsApp
</a>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;