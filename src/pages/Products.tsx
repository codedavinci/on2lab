import { useEffect, useState } from "react";
import Header from "../components/Header";
import ProductCard from "../components/Product";
import { Product } from "../types ";
import { getProducts } from "../api";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const _products = await getProducts();

      console.log(_products);

      setProducts(_products);
    }

    fetchProducts();
  }, []);

  return (
    <div className="p-3">
      <Header />

      <div className="flex flex-col items-center min-w-[80%]">
        <h2 className="font-poppins text-6xl font-semibold m-8 tracking-tighter">
          <i>PACK</i>
          <i className="text-secondary">AGES</i>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
          {products.map((product: Product) => {
            console.log(product);

            return <ProductCard product={product} key={product._id} />;
          })}
        </div>
      </div>
    </div>
  );
}
