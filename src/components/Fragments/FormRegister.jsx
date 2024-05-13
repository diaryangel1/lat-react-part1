import Button from "../Elements/Button"
import InputForm from "../Elements/Input"

const FormRegister = () => {
  return (
    <form action="">
    
            <InputForm 
            label="FullName" 
            name="fullname" 
            type="text" 
            placeholder="Insert your name here ..."/>
           
            <InputForm 
            label="Email" 
            name="email" 
            type="email" 
            placeholder="example@ex.com"/>

            <InputForm 
            label="Password" 
            name="password" 
            type="email" 
            placeholder="******"/>

            <InputForm 
            label="Confirm Password" 
            name="Confirmpassword" 
            type="email" 
            placeholder="******"/>
            <Button classname="bg-cyan-700 w-full">Register </Button>
          </form>
  )
}

export default FormRegister