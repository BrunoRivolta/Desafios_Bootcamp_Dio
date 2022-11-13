/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import gitHubLogo from '../assets/gitHub.png'
import { Container } from './styles'
import { Input } from '../components/Input'
import { ItemRepo } from '../components/ItemRepo'
import { Button } from '../components/Button'
import { api } from '../services/api'
import { useState } from 'react'

function App() {

    const [currentRepo, setCurrentRepo] = useState('')
    const [respos, setRepos] = useState([])

    const handSearchRepo = async () => {
        const { data } = await api.get(`repos/${currentRepo}`)

        if(data.id) {
            const isExist = respos.find(repo => repo.id === data.id)
            if(!isExist) {
                setRepos(prev => [...prev, data])
                setCurrentRepo('')
                return
            }
        }
    }

    const handleremoveRepo = (id) => {
        const list = []
        for (let i = 0; i < respos.length; i++) {
            if (respos[i].id !== id) {
                list.push(respos[i])
                console.log(list)
            }        
        }
        setRepos(list)
    }
    
    return (
        <Container>
            <img src={gitHubLogo} width={100} height={100} alt="GitHub Logo" />
            <p>Pesquise pelo usuário / nome do repositório. Exemplo: BrunoRivolta/Desafios_Bootcamp_Dio</p>
            <Input value={currentRepo} onChange={evnt => setCurrentRepo(evnt.target.value)}/>
            <Button onClick={handSearchRepo}/>
            {respos.map(repo => <ItemRepo handleremoveRepo={handleremoveRepo} repo={repo}/>)}
        </Container>
    )
}

export default App
