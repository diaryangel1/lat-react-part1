import Button from "../Elements/Button"
import InputForm from "../Elements/Input"
import { useRef, useEffect } from "react"

// membuat event handler 15.05 ada di folder button index
const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault()
    // untuk mengambil email
    console.log(event.target.email.value)
    // untuk mengambil password
    console.log(event.target.password.value)
    console.log("login")
    // belajar menyimpan data login ke local storage
    localStorage.setItem('email', event.target.email.value)
    localStorage.setItem('password', event.target.password.value)
    // belajar redirect ke halaman products
    window.location.href = '/products' 
  }

  // up22 belajar useRef agar kursor berada otomatis di kolom email ketika berada di page login
  const emailRef = useRef(null)
  // up24 menggunakan didmount dengan useEffect
  useEffect(() => {
      emailRef.current.focus();
  }, []);
  return (
    <form onSubmit={handleLogin}>
            {/* email sudah di slice ke folder input */}
            {/* <div className='mb-6'>
             
              
            </div> */}
            {/* Email */}

            <InputForm 
            label="Email" 
            name="email" 
            type="email" 
            placeholder="example@ex.com"
            // up25 memasukan ref={emailRef}
            ref={emailRef}/>
            
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