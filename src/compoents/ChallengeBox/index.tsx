import React, { useContext, useState, useEffect} from 'react'
import { start } from 'repl';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext } from '../../contexts/CountdownContext';
import { GlobalContext } from '../../contexts/GlobalContext';
import Container from './styles';
import Historic from './../../pages/historic';
import Cookies  from 'js-cookie';
import { stringify } from 'querystring';

const ChallengeBox = () => {
    
    const {activeChallenge, resetChallenge, completeChallenge, historic} = useContext(ChallengesContext)
    // const {changeHistoric, historic: globalHistoric} = useContext(GlobalContext);
    const {countdownReset} = useContext(CountdownContext)

    function handleCompletedChallenge(){
        completeChallenge()
        countdownReset()
    }

    function handleFailedChallenge(){
        countdownReset()
        resetChallenge()
    }

//    useEffect(()=>{
//        changeHistoric(historic)
//        const json = JSON.stringify(historic)
//        Cookies.set('historic',json)
//    }, [historic])

    return (

        <Container>

            {activeChallenge
            ?(
                <div className='challengeActive'>
                    <header>Ganhe {`${activeChallenge.amount} xp`} </header>
                    <main>
                        <img src={`/icons/${activeChallenge.type}.svg`} alt=""/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button onClick={handleFailedChallenge} className="challengeFailed">Falhei</button>
                        <button onClick={handleCompletedChallenge} className="challengeSucceeded">Completei</button>
                    </footer>
                </div>

                
            )
            :(
                <div className="challengeNotActive">
                    <strong>Finalize um ciclo para receber um desafio </strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up"/>
                        Avance níveis conforme cumprimento dos desafios.
                    </p>
                </div>
                
                )
            }


        </Container>
    )
}

export default ChallengeBox
