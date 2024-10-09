import React from 'react'

import { InputContainer } from './styles';

function Input({value, onChange, onKeyDown}) {
  return (
    <InputContainer>
        <input value={value} onChange={onChange} onKeyDown={onKeyDown}/>
    </InputContainer>
  )
}

export default Input
