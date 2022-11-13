/* eslint-disable react/prop-types */
import { InputContainer } from './styles'

const Input = ({ value }) => {
    return (
        <InputContainer>
            <input disabled value={value} />
        </InputContainer>
    )
}

export { Input }