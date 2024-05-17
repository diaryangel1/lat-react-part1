import React from 'react'
// belajar membuat statefull component 16/05/2024 bag1
class Counter extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            count: 0
        }
        console.log("constructor")
    }
    // 16.5 UP12 lifecycle BELAJAR component did mount 16.5.2024
    componentDidMount(){
        this.setState({count: 1})
        // komponen didmount akan menimpa constructor up12
        console.log("componentdidmount")
    }
    // 16.5 UP13 belajar component did update 16.5.2024 di class componen dan state componen
    // mengecek perubahan state dengan prevProps dan prevState
    componentDidUpdate(prevProps, prevState){
        console.log("didupdate")
        // up14 menambahkan kondisi jiga angka samadengan2 10 maka balikan ke 0
        if(this.state.count === 10) {
            this.setState({ count:0})
        }
    }
    render(){
        return(
            <div className='flex items-center'>
            <h1 className='mr-5'>{this.state.count}</h1>
            <button className='bg-red-500 text-black p-3'
            onClick={() => this.setState({count: this.state.count + 1})}>+</button>
        </div>
        )
        
    }


}

export default Counter