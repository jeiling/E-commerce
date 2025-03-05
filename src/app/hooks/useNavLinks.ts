'use client';
import useProducts from "./useProducts";

export const useNavLinks = () => {
const { collections } = useProducts();
  return [
    { href: "/", label: "Home" },
    {
      href: "/collections",
      label: "Collections",
      dropdownItems: collections.slice(0, 4).map((collection) => ({
        href: `/collections/${collection.label.toLowerCase()}`,
        label: collection.label.toUpperCase(),
        image: `/images/00000-845072492.png`,
      })),
    },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
    { href: "/sales", label: "Sales",special: true },
  ];
};
