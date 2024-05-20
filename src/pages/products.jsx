import { Fragment, useState, useEffect, useContext } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import { getProducts } from "../services/product.service";
import { getUsername } from "../services/auth.services";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layouts/Navbar";
import { DarkMode } from "../context/DarkMode";

// BELAJAR RENDERING LIST 15/05/2024

// membuat products array 15/05/2024
// up31 mengkomen dulu/ hapus data array latihan local storage 17.05.2024 rumah
// const products = [
//   {
//     id: 1,
//     name: "Baju gokil",
//     price: 100,
//     image: "/images/bajugaul.jpg",
//     description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti possimus aliquid culpa cum optio, suscipit nemo esse voluptatibus praesentium quos officiis! Harum, ipsa non. Ipsam ipsum eligendi aliquid. Officia, ratione?`
//   },
//   {
//     id: 2,
//     name: "Kolor Bekas Ketua Ormas",
//     price: 500,
//     image: "/images/kolorgaul.jpg",
//     description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti possimus aliquid culpa cum optio, suscipit nemo esse`
//   },
//   {
//     id: 3,
//     name: "sendal tempur",
//     price: 100,
//     image: "/images/sandaltempur.jpg",
//     description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti possimus aliquid culpa cum optio, suscipit nemo esse`
//   },
//   {
//     id: 4,
//     name: "Singlet Madao",
//     price: 400,
//     image: "/images/singletmadao.jpg",
//     description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti possimus aliquid culpa cum optio, suscipit nemo esse`
//   },
// ]

// tangkap email dan password dari local storage 15/05/2024
// UP49 installasi npm i jwt-decode UNTUK MENDECODE TOKEN DAN MENGGANTI email jadi token

const ProductsPage = () => {
  // up97 menambahkan toggle darkmode ke navbar product
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  // 16.05 up3 useState membuat hook dengan setCart "menangkap pesanan agar masuk ke cart"
  // const [cart, setCart] = useState([
  // {
  //   id: 1,
  //   qty: 1,
  // }
  // ])
  //  17.05.2024 up15 LATIHAN MEMBUAT USE EFFECT > KOMPONEN DID MOUNT DAN UPDATE DI STATLESS COMPONENT

  //up16 memanipulasi untuk membuat total price
  // const [cart, setCart] = useState([]);
  // const [totalPrice, setTotalPrice] = useState(0);
  // up30 membuat set baru cons setproduct dengan usestate untuk menangkap product
  const [products, setProducts] = useState([]);
  // up53 membuat state baru username
  // const [username, setUsername] = useState("")

  // up40 mengganti const username jadi memanggil usernam = useLogin
  useLogin();

  // up18 memakai useEffect yang tujuannya untuk menampilkan penjumlahan total harga barang dan tampilan total harga di kolom raw total price
  // useEffect(() => {
  //   // lanjutan up 19 komponen didmount nya di ubah buat parsing kalau misal ada, kalau tidak ada set array kosong
  //   setCart(JSON.parse(localStorage.getItem("cart")) || []);
  // }, []);

  // up51 memanggil  getusername dan kirimkan token pakai useeffect
  // useEffect(() => {
  //   // up57 memindahkan const token diatas ke useeffect getUsername token "use effect akan melakukan cek keberadaan token atau tidak dengan fungsi if dan else" tujuannya bila token tidak ada maka dialihkan ke page login karena user tidak login.
  //   const token = localStorage.getItem('token')
  //   if(token) {
  //     setUsername(getUsername(token))
  //   } else {
  //     window.location.href = "/login"
  //   }
  // up54 memberikan setusername
  // setUsername(getUsername(token))
  // },[])

  // up28 menggunakan useEffect getproducts terhadap API axios dan membuat function call back untuk menangkap data
  useEffect(() => {
    getProducts((data) => {
      // UP35 MENAMPILKAN DATA DARI API SEBENARNYA
      setProducts(data);
    });
  }, []);

  // membuat handleLogout dengan delete yang ada di local storage email dan password 15/05/2024

  // up90 PINDAHKAN LOGOUT KE NAVBAR

  // 16.05 up5 membuat fungsi handleAddToCart 16.05.2024 pakai spring operator
  // const handleAddToCart = (id) => {
  //   // 16.05.2024 up11 membuat setting cart item dengan qty yang bertambah saat di click dan bukan menambah baris, serta total harga/price
  //   if (cart.find((item) => item.id === id)) {
  //     setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
  //   } else {
  //     setCart([...cart, { id, qty: 1 }]);
  //   }
  // };

  // up21 belajar useRef 17.05.2024 membuat display di cart itu none tapi saat di click di cart muncul dan memanupulasi dom

  return (
    // membuat navbar welcome setelah login 15/05/2024
    <Fragment>
      {/* up89 memanggil navbar */}
      <Navbar />
      <div className={`flex justify-center ${isDarkMode && "bg-slate-800"} min-h-screen`}>
        {/* 16.05 USESTATE up1 belajar useState dengan menambahkan cart dan membuat card menjadi flex warp 16.05.2024 */}
        <div className="w-2/3 flex flex-wrap gap-5 justify-center my-5">
          {/* up32 menghendel product length >0 kita maping kalau datanya ada*/}
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                {/*up66 menambahkan id product di dalam header */}
                <CardProduct.Header
                  image={product.image}
                  id={product.id}
                ></CardProduct.Header>
                {/* up36 karena product dalam API itu bukan name melainkan tittle maka product.name harus diubah dan juga di cart */}
                <CardProduct.Body name={product.title}>{product.description}</CardProduct.Body>
                {/* 16.05 up6 mengirimkan handler ke footer */}
                <CardProduct.Footer
                  price={product.price}
                  // handleAddToCart={handleAddToCart}
                  id={product.id}
                ></CardProduct.Footer>
              </CardProduct>
            ))}
        </div>
        {/* 16.05 membuat cart up2 */}
        <div className="w-1/3 border bg-slate-400 h-full sticky top-0 rounded-lg shadow-md mr-4 my-5">
          <h1 className="text-3xl font-bold text-red-700 ml-5 mb-2">Cart</h1>

          {/* UP86 PEMANGGILAN TABLECART DARI FILE TABLECART dengan props products   */}

          <TableCart products={products}></TableCart>

          {/* 16.05 up4 menampilkan list dari state cart */}
          {/* <ul>
            {cart.map((item) => (
              <li key={item}>
                {item.id}   
              </li>
            ))}
          </ul> */}
          {/* 16.05 up9 menampilkan/menangkap table product, price, quantity, total dan membuat maping*/}
          {/* up82 cut table dan pindahkan ke file tablecartjsx */}
        </div>
      </div>
      {/* <div className="flex justify-center items-center">
        <Counter></Counter>
        
      </div>  */}

      <div className="pb-96"></div>
    </Fragment>
  );
};

export default ProductsPage;

{
  /* membuat tamplate card dengan nest komponen menambahkan file CardProduct di folder fragments*/
}
{
  /* <CardProduct>   
            <CardProduct.Header image="/images/kolorgaul.jpg"></CardProduct.Header>
            <CardProduct.Body tittle="Kolor Bekas Ketua Ormas">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti possimus aliquid culpa cum optio, suscipit nemo esse voluptatibus praesentium quos officiis! Harum, ipsa non. Ipsam ipsum eligendi aliquid. Officia, ratione?
            </CardProduct.Body>
            <CardProduct.Footer price="$500"></CardProduct.Footer>
        </CardProduct> */
}
