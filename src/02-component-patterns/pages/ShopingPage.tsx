import { ProductCard } from "../components/ProductCard";
import logocafe from "../assets/coffee-mug.png";
import { ProductButons, ProductImage, ProductTitle } from "../components";

const product = {
  id: "1",
  title: "Product numero one",
  img: logocafe,
  otro: 12,
};

export default function ShopingPage() {
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
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Button />
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButons />
        </ProductCard>
      </div>
    </div>
  );
}
