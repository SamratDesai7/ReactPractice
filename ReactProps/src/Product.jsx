import "./Product.css";
const Product = ({
  title,
  prise,
  desc = "description not given",
  features =[]
}) => {
  return (
    <>
      <div className="Product">
        <h3>{title}</h3>
        <h6>{desc}</h6>
        <h5>₹ {prise}</h5>
        <p>{features.map((el)=><li>{el}</li>)}</p>
      </div>
    </>
  );
};
export default Product;
