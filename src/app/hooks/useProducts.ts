'use client';
import { useEffect, useState } from 'react';
import productsData from '../../../products.json';

interface Product {
  name: string;
  price: number;
  collection: string;
  image: string;
}

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [collections, setCollections] = useState<{ label: string, image: string }[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const updatedProducts = productsData.map((product) => ({
        ...product,
        image: `/images/${product.image}.png`,
      }));
      setProducts(updatedProducts);

      const collectionMap: { [key: string]: string } = {};
      updatedProducts.forEach(product => {
        if (!collectionMap[product.collection]) {
          collectionMap[product.collection] = product.image;
        }
      });

      const collectionList = Object.keys(collectionMap).map(key => ({
        label: key,
        image: collectionMap[key],
      }));

      setCollections(collectionList);
    };

    loadProducts();
  }, []);
  return { products, collections };
};

export default useProducts;