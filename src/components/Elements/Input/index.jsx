import Label from './Label'
import Input from './Input'
import { forwardRef } from 'react'

// up23 melanjutkan forward ref
const InputForm = forwardRef ((props, ref) => {
  const {label, name, type, placeholder} = props
  return (
    <div className='mb-6'>
      <Label htlmFor={name}>{label}</Label>
      <Input 
        name={name} 
        type={type} 
        placeholder={placeholder}
        ref={ref}
      />
    </div>
  )
})

export default InputForm
