import Button from "../Elements/Button"

const CardProduct = (props) => {
    const {children} = props
    return (
        <div className="w-full max-w-sm bg-pink-600 border rounded-lg border-gray-700 shadow mx-2">
            

        {/* keterangan dan text nya */}
        {children}

        
        </div>

    )
}


// memisahkan gambar sebagai header, body dan footer


const Header = (props) => {
    const {image} = props
    return (
        <a href="#">
                <img 
                    className="p-8 rounded-t-lg" 
                    src={image} 
                    alt="product" />
            </a>
    )
}
const Body = (props) => {
    const {tittle, children} = props
    return (
        <div className="px-5 pb-5">
            <a href="">
                <h5 className="text-xl font-bold tracking-tight text-white">
                    {tittle}
                </h5>
                <p>
                    {children}
                </p>
            </a>
        </div>


     )}   


const Footer = (props) => {
    const {price} = props
    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-3xl font-bold text-white">{price}</span>
            <Button className="bg-blue-700">Add to cart</Button>
        </div>
    )

}

// pemanggilan header, body dan footer

CardProduct.Header = Header
CardProduct.Body = Body
CardProduct.Footer = Footer

export default CardProduct