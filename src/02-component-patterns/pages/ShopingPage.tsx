import { ProductCard } from "../components/ProductCard";
import logocafe from "../assets/coffee-mug.png";
import caffe_mug from "../assets/coffee-mug2.png";
import { ProductButons, ProductImage, ProductTitle } from "../components";
import "../styles/custom-styles.css";
import { Product } from "../interfaces/interfaces";
import { useState } from "react";

const product1 = {
  id: "1",
  title: "Product numero one",
  img: logocafe,
};

const product2 = {
  id: "2",
  title: "Coffee Mug -Meme",
  img: caffe_mug,
};

const Products: Product[] = [product2, product1];

//**extender de otra intrface los campos que tiene ya definidos */
interface ProductInCart extends Product {
  count: number;
}

export default function ShopingPage() {
  const [shopingCart, setShopingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});
  console.log(shopingCart);
  console.log(Products);

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShopingCart((oldShopingCart) => {
      if (count === 0) {
        const { [product.id]: toDelte, ...rest } = oldShopingCart;
        console.log({ toDelte });
        return rest;
      }
      return {
        ...oldShopingCart,
        [product.id]: { ...product, count },
      };
    });
    console.log(
      "%c Este es un texto amarillo sobre un fondo azul.",
      "color:red; background-color:black"
    );
    console.log(count, product);
  };

  return (
    <div>
      <h1>ShopingPage Store</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {Products.map((product) => (
          <ProductCard
            style={{ background: "white" }}
            product={product}
            key={product.id}
            onChange={(event) => onProductCountChange(event)}
          >
            <ProductImage
              style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.5" }}
            />
            <ProductTitle style={{ fontWeight: "bold" }} />
            <ProductButons
              style={{ display: "flex", justifyContent: "center" }}
            />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.entries(shopingCart).map(([key, item]) => (
          <ProductCard
            key={key}
            style={{ background: "white", width: "100px" }}
            product={item}
            value={shopingCart[item.id]?.count || 0}
            onChange={onProductCountChange}
          >
            <ProductImage
              style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.5" }}
            />
            <ProductButons
              style={{ display: "flex", justifyContent: "center" }}
            />
          </ProductCard>
        ))}
      </div>
    </div>
  );
}
