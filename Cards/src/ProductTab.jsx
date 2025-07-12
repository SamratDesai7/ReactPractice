import ProductCard from "./ProductCard";
import "./ProductTab.css"

const ProductTab = ()=>{
    return(
        <>
        <div className="ProductTab">

        <ProductCard title={"Logitech MX Master"} feature1={"8000 DPI"} feature2={"5 Programmable Buttons"} OldPrise={12459} NewPrise={8999} />
        <ProductCard title={"Apple Pencil (2nd Gen)"} feature1={"Intuitive Touch Surface"} feature2={"Designed For iPad Pro"} OldPrise={11900} NewPrise={9199} />
        <ProductCard title={"Zebronics"} feature1={"Designed For iPad Pro"} feature2={"Intuitive Touch Surface"} OldPrise={1599} NewPrise={899} />
        <ProductCard title={"Petronics Toad"} feature1={"Wireless Mouse 2.4GHz"} feature2={"Optical Orientation"} OldPrise={599} NewPrise={278} />
        </div>
        </>
    )
}

export default ProductTab;