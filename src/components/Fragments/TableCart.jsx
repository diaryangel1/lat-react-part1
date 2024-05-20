// UP81 membuat tablecart latredux implementasi 19.05
// up83 melakukan pemindahan table cart dari file products dan memasukan props kedalam tablecart mengomentari semua handletocart atau menghapusnya
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useTotalPrice, useTotalPriceDispatch } from "../../context/TotalPriceContext";

const TableCart = (props) => {
  const { products } = props;
  //   up84 menggunakan useSelector untuk mengganti state cart, dengan sebuah function yang menerima parameter state serta membuat state total price dan set total price dengan usestate 0
  const cart = useSelector((state) => state.cart.data);

  // const [totalPrice, setTotalPrice] = useState(0);

  // up102 memanggil const dispatch use totalprice dispatch
  const dispatch = useTotalPriceDispatch();
  //UP104 AMBIL TOTALPRICE NYA
  const { total } = useTotalPrice();

  //   up85 PEMINDAHAN BESAR memindahkan use effect yang ada di file products untuk menjumlahkan total DAN TOTALPRICE

  // up19 membuat dependencies cart dengan useEffect pakai cart.reduce pakai const sum
  useEffect(() => {
    // up20 pake fungsi if untuk memastikan data ada
    // up34 membuat hal sama bagian 3 tentang products.length > 0
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        // mencari product dalam cart dengan id lalu bisa menjalankan fungsi sum
        const product = products.find((product) => product.id === item.id);
        return product ? acc + product.price * item.qty : acc;
      }, 0);
      // 0 mendefinisikan memulai dari index ke berapa
      // setTotalPrice(sum);

      //UP103
      dispatch({
        type: "UPDATE",
        payload: {
          total: sum,
        },
      });
      // up19 bikin semua penyimpanan tersimpan di localstorage 17.05.2024
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    //  terus parsing si setcart diatas
    // up41 menambahkan dependency products ketika terjadi perubahan pada products harus dipanggil juga
  }, [cart, products]);

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <table className="text-left table-auto border-separate border-spacing-x-5 text-bold">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {/* up33 membuat length yang sama seperti products terhadap cart */}
        {products.length > 0 &&
          cart.map((item) => {
            const product = products.find((product) => product.id === item.id);
            // 16.05 up10 return table row dengan item.id serta product
            return product ? (
              <tr key={item.id}>
                {/* up38 ubah name jadi title */}
                <td>{product.title.substring(0, 10)}</td>
                <td>${product.price}</td>
                <td>{item.qty}</td>
                <td>${product.price * item.qty}</td>
                {/* membuat total belanja dari cart */}
              </tr>
            ) : null;
          })}
        {/* up17 membuat tabel row total price*/}

        <tr
          className="font-bold text-xl text-red-700"
          ref={totalPriceRef}
        >
          {/* ref={totalPriceRef} adalah bagian latihan dari up 21 agar bisa memunculkan item total harga saat tombol add cart di klik */}
          <td colSpan={3}>Total Price</td>
          {/* up105 ubah jadi total saja */}
          <td>${total}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableCart;
