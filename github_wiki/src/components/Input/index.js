/* eslint-disable react/prop-types */
import React from 'react'
import { InputContainer } from './styles'

function Input ({value, onChange}) {
    return (
        <InputContainer>
            <input value={value} onChange={onChange}/>
        </InputContainer>
    )
}

export { Input }