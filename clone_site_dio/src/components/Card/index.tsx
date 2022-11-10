/* eslint-disable react/jsx-filename-extension */
import { FiThumbsUp } from "react-icons/fi"
import {
	CardContainer,
	Content,
	HasInfo,
	ImageBackground,
	PostInfo,
	UserInfo,
	UserPicture
} from "./styles"

const Card = () => {
	return (
		<CardContainer>
			<ImageBackground src="https://www.brasilcode.com.br/wp-content/uploads/2020/05/HTML-e-CSS-Guia-basico-1024x427.png"/>
			<Content>
				<UserInfo>
					<UserPicture src="https://avatars.githubusercontent.com/u/103968174?v=4"/>
					<div>
						<h4>Bruno Rivolta</h4>
						<p>Há 5 minutos</p>
					</div>
				</UserInfo>
				<PostInfo>
					<h4>Projeto para curso de HTML e CSS</h4>
					<h4>Projeto feito no curso de HTML e CSS no bootcamp dio do Global avanade... <strong>Saiba Mais</strong></h4>
				</PostInfo>
				<HasInfo>
					<h4>#HTML #CSS #JavaScript</h4>
					<p>
						<FiThumbsUp /> 10
					</p>
				</HasInfo>
			</Content>
            
		</CardContainer>
	)
}

export { Card }