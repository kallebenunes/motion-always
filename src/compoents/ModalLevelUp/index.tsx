import React from 'react'
import Container from './styles'
import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

const ModalLevelUp = () => {
    
    const {level, closeLevelUpModal} = useContext(ChallengesContext)

    return (
        <Container>
            <div>
                <header>{level}</header>

                <strong>Parabéns</strong>

                <p>Você alcançou um novo level.</p>

                <button onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="Fehar modal"/>
                </button>
            </div>
        </Container>
        )
    }

export default ModalLevelUp
