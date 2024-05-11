const Button = (props) => {
    // membuat default properti pada buton yang kosong jadi otomatis button yang kosong akan diisi oleh const di bawah sebagai props default
    // sebelumnya const tidak ada
    const {children ="ini default", variant ="bg-blue-700", classname ="bg-cyan-700"} = props;
    return (
      <button 
          className={`h-10 px-6 rounded-md ${variant} ${classname}  text-white`} 
          type="submit"
        >
          {/* 2: asalnya ${props.variant} jadi ${variant} saja karena props sudah dipakai di const */}
         {children}
         {/* awalnya props.children adalah apa2 yang ditulis di button bawah dan akan berubah (children sendiri adalah sintak yang ada di dalam buton) 2: menjadi hanya children karena props sudah dipakai di const atas*/}
          </button>
    )
    
  }


  export default Button