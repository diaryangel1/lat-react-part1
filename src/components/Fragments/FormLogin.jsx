import { login } from "../../services/auth.services"
import Button from "../Elements/Button"
import InputForm from "../Elements/Input"
import { useRef, useEffect, useState } from "react"

// membuat event handler 15.05 ada di folder button index
const FormLogin = () => {
  // up48 menampilkan loginfailed dengan state const
  const [loginFailed, setLoginFailed] = useState("")
  const handleLogin = (event) => {
    event.preventDefault()
    // // untuk mengambil email
    // console.log(event.target.email.value)
    // // untuk mengambil password
    // console.log(event.target.password.value)
    // console.log("login")
    // // belajar menyimpan data login ke local storage
    // localStorage.setItem('email', event.target.email.value)
    // localStorage.setItem('password', event.target.password.value)
    // // belajar redirect ke halaman products
    // window.location.href = '/products'

    // up42 mengomentari sementara local storage dan membuat storage ke fakestoreapi.com
    // up44 panggil login jangan lupa import login dan buat parameter dalam bentuk const data dam ubah emailref jadi usernameref (tujuan agar handlelogin di klik maka data dikirm ke fakestoreapi.com)
    const data = {
    username: event.target.username.value,
    password: event.target.password.value
    }
    // up47 menambahkan callback dan mengecek kondisi true false pakai if untuk menampilkan eror saat salah username dan password dan akan pindah ketika token benar ke halaman products
    login(data, (status, res) => {
      if(status) {
        localStorage.setItem("token", res)
        window.location.href = "/products"
    } else {
      // up45.3menangkap setloginfailed
      setLoginFailed(res.response.data)}
    })
  }

  // up22 belajar useRef agar kursor berada otomatis di kolom email ketika berada di page login
  const usernameRef = useRef(null)
  // up24 menggunakan didmount dengan useEffect agar focus atau pointer otomatis berada di kolom email
  useEffect(() => {
      usernameRef.current.focus();
  }, []);
  return (
    <form onSubmit={handleLogin}>
      {/* up45.1 pertama menampilkan pesan loginfailed kepada user */}
      {loginFailed && <div className="bg-red-100 text-red-700 p-3 mb-6">{loginFailed}</div>}
            {/* email sudah di slice ke folder input */}
            {/* <div className='mb-6'>
             
              
            </div> */}
            {/* Email */}
            {/* up45.2 mengubah label jadi username dan type jadi text  dan juga name*/}
            <InputForm 
            label="Username" 
            name="username" 
            type="text" 
            placeholder="fatih baim"
            // up25 memasukan ref={emailRef}
            ref={usernameRef}/>
            
            {/* password */}
            {/* update 4""" memasukan inputform , dari slicing atomic design yang ada di folder input*/}
            

            <InputForm 
            label="Password" 
            name="password" 
            type="Password" 
            placeholder="******"/>


            {/* UPDATE 5""" CATATAN PENTING TUJUAN SLICING ATOMIC DESAIN
            TINGGAL COPAS AJA INPUT FORM SESUAI KEBUTUHAN TANPA RIBET */}
            {/* <div className='mb-6'>

              <label 
                htmlFor="password" 
                className='block mb-2 text-sm font-bold text-gray-900'>
                Password
              </label>
              <input 
                type="password" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring focus:ring-pink-500 block w-full px-3 placeholder:opacity-45" 
                placeholder="******" required/>
            </div> */}
            <Button classname="bg-cyan-700 w-full" type="submit">Login</Button>
          </form>
  )
}

export default FormLogin