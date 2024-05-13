
const Input = (props) => {
    const {type , placeholder, name} = props;
  return (
    <input 
                 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring focus:ring-pink-500 block w-full px-3 placeholder:opacity-45"
                type={type} 
                placeholder={placeholder} 
                name={name}
                />
  )
}

export default Input
