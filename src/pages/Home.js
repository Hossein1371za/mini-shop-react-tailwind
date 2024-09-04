import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

const Home = () => {
  const { products } = useContext(ProductContext);

  const filterProduct = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  console.log(filterProduct);

  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]">
            {filterProduct.map((product) => (
              <div
                key={product.id}
                className="w-full h-[300px] mb-4 bg-pink-200"
              >
                {product.title}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
