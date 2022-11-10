/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import { ButtonContainer } from "./styles"
import { IButton } from "./types"

const Button = ({ title, variant="primary", onClick}: IButton) => {
	return (
		<ButtonContainer variant={variant} onClick={onClick}>
			{title}
		</ButtonContainer>
	)
}

export { Button }
