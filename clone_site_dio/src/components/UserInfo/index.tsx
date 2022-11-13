/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import { IUserInfo } from "./types"
import {
	Container,
	UserPicture,
	NameText,
	Progress
} from "./styles"

const UserInfo = ({name, image, percentual}: IUserInfo) => {
	return (
		<Container>
			<UserPicture src={image} />
			<div>
				<NameText>{name}</NameText>
				<Progress percentual={percentual}/>
			</div>
		</Container>

	)
}

export { UserInfo }