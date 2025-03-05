import React from "react";
import { useRouter } from "next/router";
import products from "../../assets/products.json";
import Image from "next/image";
const ProductPage = () => {
  const router = useRouter();
  const { name } = router.query;
  const product = products.find((p) => p.name === name);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <header className="py-5 flex justify-between items-center">
        <h1 className="text-4xl font-bold">{product.name}</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-lg">
                Home
              </a>
            </li>
            <li>
              <a href="/collections" className="text-lg">
                Collections
              </a>
            </li>
            <li>
              <a href="/products" className="text-lg">
                Products
              </a>
            </li>
            <li>
              <a href="/contact" className="text-lg">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="product-details py-10">
          <div className="flex flex-col md:flex-row">
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="w-full md:w-1/2 h-96 object-cover rounded"
            />
            <div className="md:ml-10 mt-6 md:mt-0">
              <h2 className="text-3xl font-semibold">{product.name}</h2>
              <p className="mt-4 text-gray-600">${product.price}</p>

              <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>&copy; 2024 Our Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ProductPage;
