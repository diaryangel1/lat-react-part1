import { Fragment } from "react"
import CardProduct from "../components/Fragments/CardProduct"


// BELAJAR RENDERING LIST 15/05/2024

// membuat products array 15/05/2024
const products = [
  {
    id: 1,
    name: "Baju gokil",
    price: "$100",
    image: "/images/bajugaul.jpg",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti possimus aliquid culpa cum optio, suscipit nemo esse voluptatibus praesentium quos officiis! Harum, ipsa non. Ipsam ipsum eligendi aliquid. Officia, ratione?`
  },
  {
    id: 2,
    name: "Kolor Bekas Ketua Ormas",
    price: "$500",
    image: "/images/kolorgaul.jpg",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti possimus aliquid culpa cum optio, suscipit nemo esse`
  },
  {
    id: 3,
    name: "sendal tempur",
    price: "$100",
    image: "/images/sandaltempur.jpg",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti possimus aliquid culpa cum optio, suscipit nemo esse`
  },
]

// tangkap email dan password dari local storage 15/05/2024
const email = localStorage.getItem('email')

const ProductsPage = () => {
  // membuat handleLogout dengan delete yang ada di local storage email dan password 15/05/2024
  const handleLogout = () => {
    localStorage.removeItem('email')
    localStorage.removeItem('password')
    window.location.href = '/login'
  }
  return (
    // membuat navbar welcome setelah login 15/05/2024
    <Fragment>
      <div className="flex justify-end bg-cyan-700 h-20 text-white text-2xl items-center text-semibold px-10">
        Welcome {email} 
         {/* memunculkan button logout */}
        <button className="ml-5 bg-slate-500 py-1 px-3 rounded-lg" onClick={handleLogout}>Logout</button>
      </div>
     
      <div className="flex justify-center py-5">
        {products.map((product) => (
      <CardProduct key={product.id}>   
          <CardProduct.Header image={product.image}></CardProduct.Header>
          <CardProduct.Body name={product.name}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price}></CardProduct.Footer>
      </CardProduct>
          
        ))}
{/* membuat tamplate card dengan nest komponen menambahkan file CardProduct di folder fragments*/}
        {/* <CardProduct>   
            <CardProduct.Header image="/images/kolorgaul.jpg"></CardProduct.Header>
            <CardProduct.Body tittle="Kolor Bekas Ketua Ormas">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti possimus aliquid culpa cum optio, suscipit nemo esse voluptatibus praesentium quos officiis! Harum, ipsa non. Ipsam ipsum eligendi aliquid. Officia, ratione?
            </CardProduct.Body>
            <CardProduct.Footer price="$500"></CardProduct.Footer>
        </CardProduct> */}

        
      
    </div>
      
    </Fragment>
    
  )
}

export default ProductsPage