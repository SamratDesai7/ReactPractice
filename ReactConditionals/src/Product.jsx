import "./App.css";
const Product = ({
  title,
  prise,
  desc = "description not given",
  features =[]
}) => {
  let styles = { backgroundColor : prise>30000 ?"red": ""}
  return (
    <>
      <div className="Product" style={styles} >
        <h3>{title}</h3>
        <h6>{desc}</h6>
        <h5>₹ {prise}</h5>
        {prise>=30000?<p>discount: 5% final prise : {prise-(prise/5)}</p>:null}
        <p>{features.map((el)=><li>{el}</li>)}</p>
      </div>
    </>
  );
};
export default Product;
