import { createContext, ReactElement, useContext } from "react";
//*! importacion de stulos por modulos
import styles from "../styles/styles.module.css";
import no_image from "../assets/no-image.jpg";
import { useProduct } from "../hooks/useProduct";
import {
  ProductContextProps,
  ProductCardProps,
} from "../interfaces/interfaces";
import { ProductTitle } from "./ProductTitle";
import { ProductImage } from "./ProductImage";
import { ProductButons } from "./ProductButons";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children }: ProductCardProps) => {
  const { increaseBy, counter } = useProduct();
  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Button = ProductButons;
