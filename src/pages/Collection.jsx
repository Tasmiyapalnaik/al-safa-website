import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Collection() {
  return (
    <section id="collection">
  
    <div className="px-10 py-4">
      <h2 className="text-4xl font-bold mb-8">Our Collection</h2>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {products.map((item, index) => (
    <ProductCard key={index} item={item} />
  ))}
</div>
    </div>
    </section>
  );
}

export default Collection;