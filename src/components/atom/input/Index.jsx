import React from 'react'
import Label from './Label'
import Input from './Input'

const InputForm = (props) => {
    const { label, name, type, placeholder } = props
    return (
        <div>
            <Label htmlFor={name}>{label}</Label>
            <Input type={type} placeholder={placeholder} />
        </div>
    )
}

export default InputForm