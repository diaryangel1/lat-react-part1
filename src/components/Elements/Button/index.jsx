const Button = (props) => {
    // membuat default properti pada buton yang kosong jadi otomatis button yang kosong akan diisi oleh const di bawah sebagai props default
    // sebelumnya const tidak ada
    const {
      // perubahan belajar event handler 05.05
      children ="ini default", 
      variant ="bg-blue-700", 
      onClick=() => {}, 
      type="button", 
      classname ="bg-cyan-700"
    } = props;
    return (
      <button 
          className={`h-10 px-6 rounded-md ${variant} ${classname}  text-white`} 
          type={type}
          onClick={() => onClick()}
        >
          {/* 2: asalnya ${props.variant} jadi ${variant} saja karena props sudah dipakai di const */}
         {children}
         {/* awalnya props.children adalah apa2 yang ditulis di button bawah dan akan berubah (children sendiri adalah sintak yang ada di dalam buton) 2: menjadi hanya children karena props sudah dipakai di const atas*/}
          </button>
    )
    
  }


  export default Button