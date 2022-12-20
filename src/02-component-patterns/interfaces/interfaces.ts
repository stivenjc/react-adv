import { ReactElement } from "react";

export interface ProductButonsProps {
  //*! expecficamos que tiene que ser de typo funcion que no retorn nada y que tien un parametro de typo numero
  increaseBy: (numero: number) => void;
  counter: number;
}

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}
