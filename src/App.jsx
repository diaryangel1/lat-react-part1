
import Button from './components/Elements/Button'
import LoginPage from './pages/login';
import RegisterPage from './pages/register';


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
        {/* <LoginPage></LoginPage> */}
        <RegisterPage></RegisterPage>
        
      </div>   
    </div>
  );
}

export default App;
