import "./App.css";
import Product from "./Product";

function App() {
  let options = ["hi-tech", "durable", "fast"];
  return (
    <>
      <Product
        title="Phone"
        prise={50000}
        desc="Iphone 13 128gb storage 13px back camera flow-less"
        features={options}
      />
      <Product
        title="Laptop"
        prise={50000}
        desc="HP ryzen 5 8gb ram and 512gb ssd storage"
      />
    </>
  );
}

export default App;
