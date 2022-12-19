import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export const ProductTitle = ({ title }: { title?: string }) => {
  const { product } = useContext(ProductContext);
  let titleok: string;
  if (title) {
    titleok = title;
  } else {
    titleok = product.title;
  }
  return <span className={styles.productDescription}>{titleok}</span>;
};
