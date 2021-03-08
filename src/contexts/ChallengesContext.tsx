import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import challenges from './../api/challenges.json'
import { CountdownContext } from "./CountdownContext";
import Cookies from 'js-cookie'
import ModalLevelUp from "../compoents/ModalLevelUp";
import produce from 'immer'



type Challenge = {
    type: 'eye || body';
    description: string;
    amount: number;

}

type HistoricModelData = {
    fullDate: string;
    amount: number; 
    lastAmount: number;
    level: number;
    challengesCompleteds: number;
}

type ChallengeContextData = {
    level: number; 
    currentExperience: number; 
    challengesCompleteds: number;
    experienceToNextLevel: number;
    activeChallenge: Challenge;
    historic: HistoricModelData[];
    levelUp: () => void;
    startNewChallenge: () => void; 
    resetChallenge: () => void;
    completeChallenge: () => void;
    closeLevelUpModal: () => void;
    initialFill: (currentExperience: number, level:number, challengesCompleteds:number, historic:string) => void;
}

type ChallengeProviderProps = {
    children: ReactNode,
    challengesCompleteds: number, 
    currentExperience: number, 
    level: number
}

export const ChallengesContext = createContext({} as ChallengeContextData) 

export function ChallengeProvider({children}){

    const [level, setLevel] = useState( 1);
    const [challengesCompleteds, setChallengesCompleteds] = useState(0);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [lastAmount, setLastAmount] = useState(0)
    const [activeChallenge, setActiveChallenge] = useState(null)
    const experienceToNextLevel = Math.pow((level + 1)*4, 2)
    const [isLvUpModalOpen, setIsLvUpModalOpen] = useState(false);
    const [historic, setHistoric] = useState([])
    let test = []

    useEffect(()=>{
        Notification.requestPermission()
    },[])

    useEffect(() => {
       
       if(lastAmount != 0){
        Cookies.set('level', String(level))
        Cookies.set('currentExperience', String(currentExperience))
        Cookies.set('challengesCompleteds', String(challengesCompleteds))
        
        addRegister(level, challengesCompleteds, currentExperience, lastAmount)
        }

        
    }, [currentExperience,challengesCompleteds,level])

    useEffect(()=>{
        if(historic.length > 0){Cookies.set('historic', historic)}
    }, [historic])

    function initialFill (currentExperience, level, challengesCompleteds, historic){
        setCurrentExperience(currentExperience)
        setLevel(level)
        setChallengesCompleteds(challengesCompleteds)
        historic ? setHistoric(JSON.parse(historic)) : null
    }   

    function levelUp ():void{
        setLevel(level + 1)
        setIsLvUpModalOpen(true)
    }

    function closeLevelUpModal(){
        setIsLvUpModalOpen(false)
    }

    function startNewChallenge(){
        const randomChallengeIndex = Math.floor(Math.random()*challenges.length)
        const challenge = challenges[randomChallengeIndex]
        setActiveChallenge(challenge)

        if(Notification.permission === 'granted'){
            new Notification('Novo desafio !', {
                body: `Desafio valendo ${challenge.amount} xp`
            })
            new Audio('/notification.mp3').play()
        }
        
    }

    function resetChallenge(){
        setActiveChallenge(null)
    }

    function completeChallenge(){
        if(!activeChallenge){
            return null
        } 

        const {amount} = activeChallenge;
        setLastAmount(amount)

        let finalExperience = amount + currentExperience;

        if(finalExperience >= experienceToNextLevel){
            finalExperience  = finalExperience - experienceToNextLevel; 
            levelUp();

        }
        setCurrentExperience(finalExperience)
        setActiveChallenge(null)
        setChallengesCompleteds(challengesCompleteds + 1)

        
        
    }

    function addRegister (level,challengesCompleteds,amount,lastAmount){
        const date = new Date(); 
        const month = String(date.getMonth()+1).padStart(2,'0').split(' ')
        const day = String(date.getDate()).padStart(2,'0').split(' ')
        
        const fullDate = `${day}/${month}/${date.getFullYear()}`

        setHistoric(produce(historic, draft => {
            let modelHistoric = {
                fullDate, 
                amount, 
                lastAmount,
                level, 
                challengesCompleteds
            }

            draft.push(modelHistoric)
        }))

        
    }
    
    const contextData:ChallengeContextData = {
        level,
        challengesCompleteds,
        currentExperience,
        activeChallenge,
        historic,
        levelUp,
        startNewChallenge,
        resetChallenge,
        experienceToNextLevel, 
        completeChallenge,
        closeLevelUpModal,
        initialFill
    }
    
    return (
        <ChallengesContext.Provider value={contextData}>
            {children}
            {isLvUpModalOpen && <ModalLevelUp/>}
        </ChallengesContext.Provider>
    )
} 