import { createContext, useState, useContext,useEffect} from 'react'
import { ChallengesContext } from './ChallengesContext';

type CountdownContextData = {
    minutes: number; 
    seconds: number;
    isActive: boolean; 
    hasFinished: boolean;
    countdownStart: () => void;
    countdownReset: () => void;
    setHasFinished: React.ReactNode
}

let countdownTimeout: NodeJS.Timeout

export const CountdownContext = createContext({} as CountdownContextData) 


export function CountdownProvider ({children}){
    
    let [time, setTime] = useState((25*60)); 
    const minutes = Math.floor(time/60); 
    const seconds = (time%60)

    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    const {startNewChallenge, activeChallenge} = useContext(ChallengesContext)

    function countdownStart():void{ 
        setIsActive(true)
    }

    function countdownReset():void{
        clearTimeout(countdownTimeout)
        setIsActive(false)
        setHasFinished(false)
        setTime(Math.floor(25 * 0.1))
    }
    
   useEffect(() => {
        
        if(isActive && time > 0){
            countdownTimeout = setTimeout(() => {
                setTime(time -1)
            }, 1000)
        } else if (time === 0 && isActive) {
            setHasFinished(true)
            setIsActive(false)
            startNewChallenge()
        }

        

   }, [isActive,time,activeChallenge])
    
    const contextData:CountdownContextData = {
        minutes,
        seconds,
        hasFinished,
        isActive, 
        countdownStart,
        countdownReset, 
        setHasFinished
    }
    
    return (
        <CountdownContext.Provider value={contextData}>
            {children}
        </CountdownContext.Provider>
    )
}