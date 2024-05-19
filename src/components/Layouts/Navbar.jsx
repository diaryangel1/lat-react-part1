// up88 MEMBUAT KERANJANG TOTAL QTY BELANJAAN DI NAVBAR

import { useSelector } from "react-redux";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button";

import { useEffect, useState } from "react";

const Navbar = () => {
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      const qty = Number(item.qty);
      return acc + (isNaN(qty) ? 0 : qty);
    }, 0);

    setTotalCart(sum);
  }, [cart]);

  const username = useLogin();
  //   UP91 PINDAH LOGOUT DARI PRODUCT KE NAVBAR
  const handleLogout = () => {
    // up56 membuat handleLogout token dengan mengganti email dan komentari pasword
    // localStorage.removeItem('email')
    // localStorage.removeItem('password')
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  return (
    <div className="flex justify-end bg-cyan-700 h-20 text-white text-2xl items-center text-bold px-10 p-2 w-full">
      Welcome {/* up55 memunculkan username  */}
      {username}
      {/* {email}  */}
      {/* memunculkan button logout */}
      <Button
        className="ml-5 bg-slate-500 text-white py-1 px-3 rounded-lg"
        onClick={handleLogout}
      >
        Logout
      </Button>
      {/* bikin hitungan keranjang di sebelah buton logout */}
      <div className="ml-5 bg-slate-900 text-white py-1 px-3 rounded-lg">{totalCart}</div>
    </div>
  );
};

export default Navbar;
