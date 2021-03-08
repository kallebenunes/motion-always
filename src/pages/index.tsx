import Head from 'next/head'
import ExperienceBar from '../compoents/ExperienceBar'
import GlobalStyle, { AppContainer } from './GlobalStyle'
import Profile from './../compoents/Profile/index';
import CompleteChallenges from '../compoents/CompleteChallenges';
import Countdown from '../compoents/Countdown';
import ChallengeBox from '../compoents/ChallengeBox';
import { CountdownProvider } from '../contexts/CountdownContext';
import {GetServerSideProps} from 'next'
import {useRouter} from 'next/router'
import { useContext, useEffect } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

type HomeProps = {
  level?: number, 
  currentExperience?: number, 
  challengesCompleteds?: number,
  historic: string
}

export default function Home(props: HomeProps) {
  const router = useRouter()

  const {initialFill} = useContext(ChallengesContext)

  

  useEffect(() => {
    props.level 
    ? initialFill(props.currentExperience, props.level, props.challengesCompleteds, props.historic)
    : null
  }, [])

  return (
      <AppContainer>
         <GlobalStyle/>  
         <ExperienceBar/>    
         <CountdownProvider>
           <section>
             <div>
               <Profile/>
               <CompleteChallenges/>
               <Countdown/>
             </div>
             <div>
               <ChallengeBox/>
             </div>
           </section>
         </CountdownProvider>
       </AppContainer>
        
  )
}
 export const getServerSideProps:GetServerSideProps = async (ctx) => {
   
    const {level, currentExperience, challengesCompleteds, historic} = ctx.req.cookies

  return {
     props: {
      level: Number(level),
      currentExperience: Number(currentExperience), 
      challengesCompleteds: Number(challengesCompleteds),
      historic: historic || null
      }
       
   }
 }

 