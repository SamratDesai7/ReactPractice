import "./ProductCard.css"

const ProductCard= ({title,feature1,feature2,OldPrise,NewPrise})=>{
    return(
        <>
        <div className="ProductCard">
            <h3>{title}</h3>
            <p>{feature1}</p>
            <p>{feature2}</p>
            <p className="Prise" ><span><del>{OldPrise}</del> </span><span> <b> {NewPrise}</b></span></p>
        </div>
        </>
    )
}
export default ProductCard