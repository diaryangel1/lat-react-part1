import { forwardRef } from "react"

//up22 menggunakan react forward ref agar bisa menangkap fungsi ref dimana agar kursor berada otomatis didalam kolom input email saat didalam page login
const Input = forwardRef((props, ref) => {
  const {type , placeholder, name} = props;
return (
  <input 
               
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring focus:ring-pink-500 block w-full px-3 placeholder:opacity-45"
              type={type} 
              placeholder={placeholder} 
              name={name}
              id={name}
              ref={ref}
              // id name agar saat judul di klik maka kolom ikut ke klik
              />

)
})
export default Input
