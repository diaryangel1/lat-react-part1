import AuthLayouts from "../components/Layouts/AuthLayouts"
import FormLogin from "../components/Fragments/FormLogin"


const LoginPage = () => {
    return (
        // type login untuk mendefinisikan fungsi dari login yang berada pada authlayouts(14/05/2024)
        <AuthLayouts title="Login" type="login">
            <FormLogin/>
            {/* membuat warning register di page login, dan menggunakan react router Link agar smooth */}
            
        </AuthLayouts>
    )
}

export default LoginPage