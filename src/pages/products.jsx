import CardProduct from "../components/Fragments/CardProduct"

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
        {/* membuat tamplate card dengan nest komponen menambahkan file CardProduct di folder fragments*/}
        <CardProduct>   
            <CardProduct.Header image="/images/bajugaul.jpg"></CardProduct.Header>
            <CardProduct.Body tittle="Baju gokil">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti possimus aliquid culpa cum optio, suscipit nemo esse voluptatibus praesentium quos officiis! Harum, ipsa non. Ipsam ipsum eligendi aliquid. Officia, ratione?
            </CardProduct.Body>
            <CardProduct.Footer price="$100"></CardProduct.Footer>
        </CardProduct>

        <CardProduct>   
            <CardProduct.Header image="/images/kolorgaul.jpg"></CardProduct.Header>
            <CardProduct.Body tittle="Kolor Bekas Ketua Ormas">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti possimus aliquid culpa cum optio, suscipit nemo esse voluptatibus praesentium quos officiis! Harum, ipsa non. Ipsam ipsum eligendi aliquid. Officia, ratione?
            </CardProduct.Body>
            <CardProduct.Footer price="$500"></CardProduct.Footer>
        </CardProduct>

        
      
    </div>
  )
}

export default ProductsPage