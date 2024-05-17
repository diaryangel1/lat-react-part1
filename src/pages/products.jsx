import { Fragment, useState, useEffect, useRef } from "react"
import CardProduct from "../components/Fragments/CardProduct"
import Counter from "../components/Fragments/Counter"
import { getProducts } from "../services/product.service"


// BELAJAR RENDERING LIST 15/05/2024

// membuat products array 15/05/2024
const products = [
  {
    id: 1,
    name: "Baju gokil",
    price: 100,
    image: "/images/bajugaul.jpg",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti possimus aliquid culpa cum optio, suscipit nemo esse voluptatibus praesentium quos officiis! Harum, ipsa non. Ipsam ipsum eligendi aliquid. Officia, ratione?`
  },
  {
    id: 2,
    name: "Kolor Bekas Ketua Ormas",
    price: 500,
    image: "/images/kolorgaul.jpg",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti possimus aliquid culpa cum optio, suscipit nemo esse`
  },
  {
    id: 3,
    name: "sendal tempur",
    price: 100,
    image: "/images/sandaltempur.jpg",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti possimus aliquid culpa cum optio, suscipit nemo esse`
  },
  {
    id: 4,
    name: "Singlet Madao",
    price: 400,
    image: "/images/singletmadao.jpg",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti possimus aliquid culpa cum optio, suscipit nemo esse`
  },
]

// tangkap email dan password dari local storage 15/05/2024
const email = localStorage.getItem('email')

const ProductsPage = () => {
  // 16.05 up3 useState membuat hook dengan setCart "menangkap pesanan agar masuk ke cart"
  // const [cart, setCart] = useState([
    // {
    //   id: 1,
    //   qty: 1,
    // }
  // ])
//  17.05.2024 up15 LATIHAN MEMBUAT USE EFFECT > KOMPONEN DID MOUNT DAN UPDATE DI STATLESS COMPONENT

//up16 memanipulasi untuk membuat total price
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0)
// up30 membuat cons setproduct dengan usestate
  const [products, setProducts] = useState([])
  // up18 memakai useEffect yang tujuannya untuk menampilkan penjumlahan total harga barang dan tampilan total harga di kolom raw total price
  useEffect(() => {
    // lanjutan up 19 komponen didmount nya di ubah buat parsing kalau misal ada, kalau tidak ada set array kosong
    setCart (JSON.parse(localStorage.getItem('cart')) || [])
  },[])

  // up28 menggunakan useEffect getproducts terhadap API axios dan membuat function call back untuk menangkap data
  useEffect(() => {
    getProducts((data) =>{
      console.log(data)
    })
  })
    // up19 membuat dependencies cart dengan useEffect pakai cart.reduce pakai const sum
  useEffect(() => {
    // up20 pake fungsi if untuk memastikan data ada
    if(cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        // mencari product dalam cart dengan id lalu bisa menjalankan fungsi sum
        const product = products.find(product => product.id === item.id)
        return acc + product.price * item.qty
    }, 0)
    // 0 mendefinisikan memulai dari index ke berapa
    setTotalPrice(sum)
    // up19 bikin semua penyimpanan tersimpan di localstorage 17.05.2024
    localStorage.setItem('cart', JSON.stringify(cart))
    }
    //  terus parsing si setcart diatas
  }, [cart])

  // membuat handleLogout dengan delete yang ada di local storage email dan password 15/05/2024
  const handleLogout = () => {
    localStorage.removeItem('email')
    localStorage.removeItem('password')
    window.location.href = '/login'
  }

  // 16.05 up5 membuat fungsi handleAddToCart 16.05.2024 pakai spring operator
  const handleAddToCart = (id) => {
    // 16.05.2024 up11 membuat setting cart item dengan qty yang bertambah saat di click dan bukan menambah baris, serta total harga/price
    if(cart.find(item => item.id === id)) {
      setCart(cart.map(item => item.id === id ? {...item, qty: item.qty + 1} : item))
    } else {
      setCart([...cart, {id, qty: 1}])
    }
  }

  // up21 belajar useRef 17.05.2024 membuat display di cart itu none tapi saat di click di cart muncul dan memanupulasi dom
  const totalPriceRef = useRef(null)

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = 'table-row'
    } else {
      totalPriceRef.current.style.display = 'none'
    }
  }, [cart])

  return (
    // membuat navbar welcome setelah login 15/05/2024
    <Fragment>
      <div className="flex justify-end bg-cyan-700 h-20 text-white text-2xl items-center text-semibold px-10">
        Welcome {email} 
         {/* memunculkan button logout */}
        <button className="ml-5 bg-slate-500 py-1 px-3 rounded-lg" onClick={handleLogout}>Logout</button>
      </div>
     
      <div className="flex justify-center py-5">
        {/* 16.05 USESTATE up1 belajar useState dengan menambahkan cart dan membuat card menjadi flex warp 16.05.2024 */}
        <div className="w-2/3 flex flex-wrap gap-5 justify-center">
            {products.map((product) => (
              <CardProduct key={product.id}>   
                  <CardProduct.Header image={product.image}></CardProduct.Header>
                  <CardProduct.Body name={product.name}>
                    {product.description}
                  </CardProduct.Body>
                  {/* 16.05 up6 mengirimkan handler ke footer */}
                  <CardProduct.Footer 
                    price={product.price} 
                    handleAddToCart={handleAddToCart}
                    id={product.id}
                    ></CardProduct.Footer>
              </CardProduct>
           ))}
        </div>
        {/* 16.05 membuat cart up2 */}
        <div className="w-1/3 border bg-slate-400 h-full sticky top-0 rounded-lg shadow-md mr-4">
          <h1 className="text-3xl font-bold text-red-700 ml-5 mb-2">Cart</h1>
          {/* 16.05 up4 menampilkan list dari state cart */}
          {/* <ul>
            {cart.map((item) => (
              <li key={item}>
                {item.id}   
              </li>
            ))}
          </ul> */}
          {/* 16.05 up9 menampilkan/menangkap table product, price, quantity, total dan membuat maping*/}
          <table  className="text-left table-auto border-separate border-spacing-x-5 text-bold">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find((product) => product.id === item.id)
                // 16.05 up10 return table row dengan item.id serta product
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>${product.price}</td>
                    <td>{item.qty}</td>
                    <td>${product.price * item.qty}</td>
                    {/* membuat total belanja dari cart */}
                    
                  </tr>
                )
                } )}
            {/* up17 membuat tabel row total price*/}
            
            <tr className="font-bold text-xl text-red-700" ref={totalPriceRef}>
              {/* ref={totalPriceRef} adalah bagian latihan dari up 21 agar bisa memunculkan item total harga saat tombol add cart di klik */}
              <td colSpan={3}>Total Price</td>
              <td>${totalPrice}</td>
            </tr>
            </tbody>
          </table>
        </div>     
      </div>
      {/* <div className="flex justify-center items-center">
        <Counter></Counter>
        
      </div>  */}

      <div className="pb-96"></div>
      
    </Fragment>
    
  )
}

export default ProductsPage




{/* membuat tamplate card dengan nest komponen menambahkan file CardProduct di folder fragments*/}
        {/* <CardProduct>   
            <CardProduct.Header image="/images/kolorgaul.jpg"></CardProduct.Header>
            <CardProduct.Body tittle="Kolor Bekas Ketua Ormas">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti possimus aliquid culpa cum optio, suscipit nemo esse voluptatibus praesentium quos officiis! Harum, ipsa non. Ipsam ipsum eligendi aliquid. Officia, ratione?
            </CardProduct.Body>
            <CardProduct.Footer price="$500"></CardProduct.Footer>
        </CardProduct> */}