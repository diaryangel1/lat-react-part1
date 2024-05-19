import { Link } from "react-router-dom";
import Button from "../Elements/Button";
// up79 import usedispatch dan addtocart
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-xs bg-pink-600 border rounded-lg border-gray-700 shadow mx-3 flex flex-col justify-between">
      {/* keterangan dan text nya */}
      {children}
    </div>
  );
};

// memisahkan gambar sebagai header, body dan footer

const Header = (props) => {
  const { image, id } = props;
  return (
    // up65 menjadikan image ketika di klik lalu pindah ke halaman detail product sesuai id dan menambahkan link di href
    <Link to={`/product/${id}`}>
      <img
        // up39 merapihkan tampilan gambar product yang berbeda beda
        className="p-8 rounded-t-lg w-full h-60 object-cover"
        src={image}
        alt="product"
      />
    </Link>
  );
};
const Body = (props) => {
  const { name, children } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-xl font-bold tracking-tight text-white">{name.substring(0, 20)} ...</h5>
        <p className="text-justify">
          {/* up40 merapihkan semua text product agar sama panjang pakai substring */}
          {children.substring(0, 100)} ...
        </p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  //up80 latredux imple : membuat dispatch
  const dispatch = useDispatch();
  // 16.05.2024 up8 membuat fungsi onclick berjalan dengan mengambil fungsi handleAddToCart dan menangkap id
  const { price, id } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-3xl font-bold text-white">$ {price}</span>
      <Button
        // up78 latredux implementasi : mengubah onclick handle menjadi dipatch masukan kedalam store addtocart nya dan jangan lupa import use dispatch (id diambil dari props)19/05/2024
        onClick={() => dispatch(addToCart({ id, qty: 1 }))}
        className="bg-blue-700"
      >
        Add to cart
      </Button>
    </div>
  );
};

// pemanggilan header, body dan footer

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
