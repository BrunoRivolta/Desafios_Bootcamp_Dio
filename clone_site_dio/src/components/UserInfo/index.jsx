/* eslint-disable react/prop-types */
import React from "react"
import {
	Container,
	UserPicture,
	NameText,
	Progress
} from "./styles"

const UserInfo = ({name, image, percentual}) => {
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