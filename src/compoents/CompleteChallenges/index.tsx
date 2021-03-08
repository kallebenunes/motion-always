import React, { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengesContext'
import Container from './styles'



const CompleteChallenges = () => {
    
    const {challengesCompleteds} = useContext(ChallengesContext)

    
    return (
        <Container>
            <span>Desafios Concluídos</span>
            <span>{challengesCompleteds}</span>
        </Container>
    )
}

export default CompleteChallenges
