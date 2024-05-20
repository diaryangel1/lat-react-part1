import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";
import { useContext } from "react";

const AuthLayouts = (props) => {
  const { children, title, type } = props;

  // up94 MEMASUKAN DARKMODE(isdarkmode dan set) KE LOGIN menggunakan usecontext untuk hook
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  {
    console.log("isDarkMode", isDarkMode);
  }
  return (
    // up95 gunakan pengkodisian darkmode isdarkmode && ibaratnya kalau true maka dark kalau false maka normal

    <div className={`flex justify-center min-h-screen items-center ${isDarkMode && "bg-slate-800"}`}>
      <div className="w-full max-w-xs">
        {/* up96 menambahkan button darkmode dan lightmode */}
        <button
          className="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded"
          // logicnya bila true maka set false dan sebaliknya
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "Light" : "Dark"}
        </button>
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="text-gray-600 font-medium mb-5">Welcome to the jungle, syalalalala niiid</p>

        {children}
        {/* 14/05/2024  CONDITIONAL RENDERING*/}
        {/* membuat pesan untuk user sign up dan sign in */}
        <p className="text-center text-sm mt-5">
          {type === "login" ? "Don't have an account? " : "Have an account? "}

          {/* menampilkan link untuk user sign up dan sign in gunakan ternary operator */}
          {type === "login" && (
            // saat di page login maka muncul sign up
            <Link
              to="/register"
              className="underline font-bold text-blue-600"
            >
              Sign up
            </Link>
          )}

          {type === "register" && (
            // saat di page register akan muncul sign in
            <Link
              to="/login"
              className="underline font-bold text-blue-600"
            >
              Sign in
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayouts;
