
const AuthLayouts = (props) => {
  const {children, title} = props
  return (
    <div className='w-full max-w-xs'>
          <h1 className='text-3xl font-bold mb-2 text-blue-600'>{title}</h1>
          <p className='text-gray-600 font-medium mb-5'>Welcome to the jungle, syalalalala niiid</p>

          {children}
          {/* <FormLogin/> */}
          {/* <form action=""> */}
            {/* email sudah di slice ke folder input */}
            {/* <div className='mb-6'>
             
              
            </div> */}
            {/* Email */}

            {/* <InputForm 
            label="Email" 
            name="email" 
            type="email" 
            placeholder="example@ex.com"/> */}
            {/* password */}
            {/* update 4""" memasukan inputform , dari slicing atomic design yang ada di folder input*/}
            

            {/* <InputForm 
            label="Password" 
            name="password" 
            type="email" 
            placeholder="******"/> */}


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
            {/* <Button classname="bg-cyan-700 w-full">Login</Button>
          </form> */}
        </div>
  )
}

export default AuthLayouts
