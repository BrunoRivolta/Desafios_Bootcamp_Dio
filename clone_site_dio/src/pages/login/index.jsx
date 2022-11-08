import { MdEmail, MdLock } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Columm, Container, CriarText, EsqueciText, Row, SubtitleLogin, TitleLogin, Title, Wrapper } from "./styles"


const Login = () => {

	const navigate = useNavigate()

	const handleClickSignIn = () => {
		navigate("/feed")
	}

	return (<>
		<Header />
		<Container>
			<Columm>
				<Title>
					A plataforma para você aprender com experts, dominar as principais tecnologias
					e entrar mais rápido nas empresas mais desejadas.
				</Title>
			</Columm>
			<Columm>
				<Wrapper>
					<TitleLogin>Faça seu cadastro</TitleLogin>
					<SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
					<form>
						<Input placeholder="E-mail" leftIcon={<MdEmail />} />
						<Input placeholder="Senha" type="password" leftIcon={<MdLock />} />
						<Button title="Entrar" variant="secondary" onClick={handleClickSignIn} />
					</form>
					<Row>
						<EsqueciText>Esqueci minha senha</EsqueciText>
						<CriarText>Criar Conta</CriarText>
					</Row>
				</Wrapper>


			</Columm>
		</Container>
	</>)
}

export { Login }
