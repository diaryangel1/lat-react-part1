import React from 'react'
// belajar membuat statefull component 16/05/2024 bag1
class Counter extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            count: 0
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