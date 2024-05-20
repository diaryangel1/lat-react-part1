// up88 MEMBUAT KERANJANG TOTAL QTY BELANJAAN DI NAVBAR

import { useSelector } from "react-redux";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button";

import { useContext, useEffect, useState } from "react";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice } from "../../context/TotalPriceContext";

const Navbar = () => {
  //106 copast cons use total price
  const { total } = useTotalPrice();
  // up99 copast juga const darkmode
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
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
    <div className="flex justify-end bg-cyan-700 h-20 text-white text-2xl items-center px-10 p-2 w-full">
      <div className="font-bold mr-5">
        Welcome {/* up55 memunculkan username  */}
        {username}
      </div>

      {/* {email}  */}
      {/* memunculkan button logout */}
      {/* up98 copast button darkmode */}
      <Button
        className="ml-5 bg-slate-500 text-white py-1 px-3 rounded-lg"
        onClick={handleLogout}
      >
        Logout
      </Button>
      {/* bikin hitungan keranjang di sebelah buton logout */}
      <div className="top-0 ml-5 bg-slate-900 text-white py-1 px-3 rounded-lg">
        {/* up105 menambahkan item dan price di navbar */}
        item : {totalCart} | price : {total}
      </div>
      <button
        className=" bg-slate-600 p-2 ml-5 text-white rounded"
        // logicnya bila true maka set false dan sebaliknya
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "Light" : "Dark"}
      </button>
    </div>
  );
};

export default Navbar;
