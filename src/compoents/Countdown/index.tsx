import React, { useState, useEffect, useContext } from 'react'
import { start } from 'repl';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext, CountdownProvider } from '../../contexts/CountdownContext';
import Container from './styles'

let coutndownTimeout: NodeJS.Timeout

const Countdown = () => {
    const {minutes, seconds, hasFinished, isActive, countdownStart,countdownReset} = useContext(CountdownContext)

    const [minutesLeft,minutesRight] = String(minutes).padStart(2,'0').split('')
    const [secondsLeft,secondsRight] = String(seconds).padStart(2,'0').split('')

    return (
        
            <Container> 
                <div>
                    <div>
                        <span>{minutesLeft}</span>
                        <span>{minutesRight}</span>
                    </div>
                        <span>:</span>
                    <div>
                        <span>{secondsLeft}</span>
                        <span>{secondsRight}</span>
                    </div>
                </div>

                {hasFinished 
                ? <button disabled>Ciclo encerrado</button>
                : <>
                    {isActive
                    ? <button onClick={countdownReset} className='active'>Abandonar um ciclo</button>
                    : <button onClick={countdownStart} >Iniciar um ciclo</button>
                    }
                </>
                }
                
            </Container>
    )
}

export default Countdown
