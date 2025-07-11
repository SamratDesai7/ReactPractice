import "./Product.css";
const Product = ({ title, prise, desc = "description not given" }) => {
  return (
    <>
      <div className="Product">
        <h3>{title}</h3>
        <h6>{desc}</h6>
        <h5>₹ {prise}</h5>
      </div>
    </>
  );
};
export default Product;
