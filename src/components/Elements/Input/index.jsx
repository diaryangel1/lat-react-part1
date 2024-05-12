import React from 'react'
import Label from './Label'
import Input from './input'

const inputForm = (props) => {
    const {tittle} = props
  return (
    <div className='mb-6'>
             <Label>{tittle}</Label>
             <Input type={type}/>
             
              
            </div>
  )
}

export default inputForm
