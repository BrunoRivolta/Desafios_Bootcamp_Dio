/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import logo from "../../assets/logo.png"
import { Button } from "../Button"
import { IHeader } from "./types"
import {
	BuscarImputContainer,
	Container,
	Imput,
	Menu,
	MenuRigth,
	Row,
	UserPicture,
	Wrapper
} from "./style"


const Header = ({autenticado}: IHeader) => {
	return (
		<Wrapper>
			<Container>
				<Row>
					<img src={logo} alt="Logo DIO"></img>
					{autenticado  ? (
						<>
							<BuscarImputContainer>
								<Imput placeholder='Buscar...' />
							</BuscarImputContainer>
							<Menu>Live Code</Menu>
							<Menu>Global</Menu>
						</>
					) : null}
				</Row>
				<Row>
					{autenticado ? (
						<UserPicture src="https://avatars.githubusercontent.com/u/103968174?v=4" />
					) : (
						<>
							<MenuRigth href="#">Home</MenuRigth>
							<Button title="Entrar" />
							<Button title="Cadastrar" />
						</>
					)}
				</Row>
			</Container>
		</Wrapper>
	)
}

export { Header }
