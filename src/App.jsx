import InputForm from './components/Elements/Input';
import Button from './components/Elements/Button'
import FormLogin from './components/Fragments/FormLogin';

// 1 PELAJARAN PROPERTI DAN KOMPONEN BAGIAN 1

// 1.3 Update 3 komponen button sudah pindah ke folder button
// cara menggunakan props (menambahkan properti di button)
// const Button = (props) => {
//   // membuat default properti pada buton yang kosong jadi otomatis button yang kosong akan diisi oleh const di bawah sebagai props default
//   // sebelumnya const tidak ada
//   const {children ="ini default", variant ="bg-blue-700"} = props;
//   return (
//     <button 
//         className={`h-10 px-6 rounded-md ${variant}  text-white`} 
//         type="submit"
//       >
//         {/* 2: asalnya ${props.variant} jadi ${variant} saja karena props sudah dipakai di const */}
//        {children}
//        {/* awalnya props.children adalah apa2 yang ditulis di button bawah dan akan berubah (children sendiri adalah sintak yang ada di dalam buton) 2: menjadi hanya children karena props sudah dipakai di const atas*/}
//         </button>
//   )
  
// }

function App() {
  return (
    <div className='justify-center flex-col '>
      <h1 className='text-cyan-700 font-bold text-4xl'>
        WADIDAW WAAAAAAAA WAAAAA
      </h1>
      <div className='flex gap-5'>
        {/* cara props bekerja agar tidak cape koding */}
        <Button variant="bg-red-700 font-bold">buangsaaat</Button>
        <Button variant="bg-green-700">genderwoo</Button>
        {/* membuat button yang tidak diisi menjadi default */}
        <Button></Button>
      </div>


      <hr className='my-5'/>
{/* GARIS BARU */}




      <div className='flex justify-center min-h-screen items-center'>
        <div className='w-full max-w-xs'>
          <h1 className='text-3xl font-bold mb-2 text-blue-600'>Login</h1>
          <p className='text-gray-600 font-medium mb-5'>Welcome to the jungle, syalalalala niiid</p>
          <FormLogin/>
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
      </div>   
    </div>
  );
}

export default App;
