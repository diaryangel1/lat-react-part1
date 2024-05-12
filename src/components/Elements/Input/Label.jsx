import React, { Children } from 'react'

const Label = (props) => {
    const {htmlFor, Children} = props
  return (

     <label 
                htmlFor={htmlFor} 
                className='block mb-2 text-sm font-bold text-gray-900'>
                {Children}
              </label>
  )
}

export default Label
