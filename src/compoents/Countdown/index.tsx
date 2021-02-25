import React, { useState, useEffect } from 'react'
import Container from './styles'

let coutndownTimeout: NodeJS.Timeout

const Countdown = () => {
    
    let [time, setTime] = useState((25*60)); 
    const minutes = Math.floor(time/60); 
    const seconds = (time%60)


    const [minutesLeft,minutesRight] = String(minutes).padStart(2,'0').split('')
    const [secondsLeft,secondsRight] = String(seconds).padStart(2,'0').split('')

    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    function countdownStart():void{ 
        setIsActive(true)
    }

    function countdownReset():void{
        clearTimeout(coutndownTimeout)
        setIsActive(false)
        setTime(Math.floor(25 * 0.1))
    }
    
   useEffect(() => {
        
        if(isActive && time > 0){
            coutndownTimeout = setTimeout(() => {
                setTime(time -1)
            }, 1000)
        } else if (time === 0 && isActive) {
            setHasFinished(true)
            setIsActive(false)
            
        }

   }, [isActive,time])


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
