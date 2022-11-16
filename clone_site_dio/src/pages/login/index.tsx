/* eslint-disable react/jsx-filename-extension */
import { MdEmail, MdLock } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Columm, Container, CriarText, EsqueciText, Row, SubtitleLogin, TitleLogin, Title, Wrapper } from "./styles"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { api } from "../../services/api"
import { IformData } from "./types"

const schema = yup.object({
	email: yup.string().email("Email não é valido").required("Campo Obrigatorio"),
	password: yup.string().min(3, "No minimo 3 caracteres").required("Campo Obrigatorio"),
}).required()

const Login = () => {
	const navigate = useNavigate()
	const { control, handleSubmit, formState: { errors } } = useForm<IformData>({
		resolver: yupResolver(schema),
		mode: "onChange",
	})

	const onSubmit = async (formData: IformData) => {
		try{
			const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
			if(data.length === 1) {
				navigate("/feed")
			} else {
				alert("Houve um erro, tente novamente")
			}
		} catch {
			alert("Houve um erro tente novamente")
		}
	}


	const handleClickRegistration = () => {
		navigate("/registration")
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
					<form onSubmit={handleSubmit(onSubmit)}>
						<Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />} />
						<Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />
						<Button title="Entrar" variant="secondary" type="submit" />
					</form>
					<Row>
						<EsqueciText>Esqueci minha senha</EsqueciText>
						<CriarText onClick={handleClickRegistration} >Criar Conta</CriarText>
					</Row>
				</Wrapper>


			</Columm>
		</Container>
	</>)
}

export { Login }
