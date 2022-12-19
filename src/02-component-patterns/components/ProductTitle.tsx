import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

interface Props {
  title?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductTitle = ({ title, className, style }: Props) => {
  const { product } = useContext(ProductContext);
  let titleok: string;
  if (title) {
    titleok = title;
  } else {
    titleok = product.title;
  }
  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {titleok}
    </span>
  );
};
