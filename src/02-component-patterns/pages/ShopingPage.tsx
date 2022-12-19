import { ProductCard } from "../components/ProductCard";
import logocafe from "../assets/coffee-mug.png";
import { ProductButons, ProductImage, ProductTitle } from "../components";
import "../styles/custom-styles.css";

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

        <ProductCard className="bg-dark" product={product}>
          <ProductImage className="custom-image" />
          <ProductTitle className="tex-white" />
          <ProductButons className="custom-buttons" />
        </ProductCard>

        <ProductCard style={{ background: "white" }} product={product}>
          <ProductImage
            style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.5" }}
          />
          <ProductTitle style={{ fontWeight: "bold" }} />
          <ProductButons style={{ display: "flex", justifyContent: "end" }} />
        </ProductCard>
      </div>
    </div>
  );
}
