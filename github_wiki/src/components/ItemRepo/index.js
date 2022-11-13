/* eslint-disable react/prop-types */
import React from 'react'
import { ItemContainer } from './styles'
 
function ItemRepo ({repo, handleremoveRepo}) {

    const handleremove = () => {
        handleremoveRepo(repo.id)
    }

    return (
        <ItemContainer onClick={handleremove}>
            <h3>{repo.name}</h3>
            <br />
            <p>{repo.full_name}</p>
            <br />
            <a href={repo.html_url} rel="noreferrer" target='_blank'>Ver repositorio</a>
            <br />
            <a className='remover' href='#' rel="noreferrer">Remover</a>
            <br />
            <br />
            <hr />
        </ItemContainer>
    )
}

export { ItemRepo }