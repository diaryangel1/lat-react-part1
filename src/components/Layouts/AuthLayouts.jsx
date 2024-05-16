import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const {children, title, type} = props;
  return (
  <div className='flex justify-center min-h-screen items-center'>
    <div className='w-full max-w-xs'>
          <h1 className='text-3xl font-bold mb-2 text-blue-600'>{title}</h1>
          <p className='text-gray-600 font-medium mb-5'>Welcome to the jungle, syalalalala niiid</p>

          {children}
          {/* 14/05/2024  CONDITIONAL RENDERING*/}
        {/* membuat pesan untuk user sign up dan sign in */}
          <p className="text-center text-sm mt-5">
            {type === "login" 
            ? "Don't have an account? " 
            : "Have an account? "}


            {/* menampilkan link untuk user sign up dan sign in gunakan ternary operator */}
            {type === "login" && 
            // saat di page login maka muncul sign up
            (
              <Link 
                    to="/register" 
                    className="underline font-bold text-blue-600">
                    Sign up
                </Link>
            )}

            {type === "register" &&
            // saat di page register akan muncul sign in
            (
            <Link 
                  to="/login" 
                  className="underline font-bold text-blue-600">
                  Sign in
              </Link>
            )}
          </p>


        </div>
  </div>
  )
}

export default AuthLayouts
