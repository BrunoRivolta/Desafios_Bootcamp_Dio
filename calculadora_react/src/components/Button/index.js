/* eslint-disable react/prop-types */
import { ButtonContainer, ButtonOpContainer } from './styles'

const Button = ({label, onClick}) => {
    return (
        <ButtonContainer onClick={onClick} >
            {label}
        </ButtonContainer>
    )
}

const Button2 = ({label, onClick}) => {
    return (
        <ButtonOpContainer onClick={onClick} >
            {label}
        </ButtonOpContainer>
    )
}


  
export { Button, Button2 }