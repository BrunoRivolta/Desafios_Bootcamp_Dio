/* eslint-disable react/jsx-filename-extension */
import { MdEmail, MdLock, MdPerson } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Columm, Container, CriarText, EsqueciText, Row, SubtitleLogin, TitleLogin, Title, Wrapper, Politicas } from "./styles"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { api } from "../../services/api"
import { IformData } from "./types"

const schema = yup.object({
	email: yup.string().email("Email não é valido").required("Campo Obrigatorio"),
	password: yup.string().min(3, "No minimo 3 caracteres").required("Campo Obrigatorio"),
}).required()

const Registration = () => {
	const navigate = useNavigate()
	const { control, handleSubmit, formState: { errors } } = useForm<IformData>({
		resolver: yupResolver(schema),
		mode: "onChange",
	})

	const handleClickSignIn = () => {
		navigate("/feed")
	}

	const handleClickLogin = () => {
		navigate("/login")
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
					<TitleLogin>Começe agora grátis</TitleLogin>
					<SubtitleLogin>Crie uma conta e make the change._</SubtitleLogin>
					<form>
						<Input name="nome" control={control} placeholder="Nome completo" leftIcon={<MdPerson />} />
						<Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />} />
						<Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />
						<Button onClick={handleClickSignIn} title="Criar minha conta" variant="secondary" />
					</form>
					<Row>

					</Row>
					<Politicas>Ao clicar em &quot;criar minha conta grátis&quot;, declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</Politicas>
					<Row>
						<EsqueciText>Já tenho conta.</EsqueciText>
						<CriarText onClick={handleClickLogin}>Fazer Login</CriarText>
					</Row>
				</Wrapper>


			</Columm>
		</Container>
	</>)
}

export { Registration }
