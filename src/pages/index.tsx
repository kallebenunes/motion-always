import Head from 'next/head'
import ExperienceBar from '../compoents/ExperienceBar'
import GlobalStyle, { AppContainer } from './GlobalStyle'
import Profile from './../compoents/Profile/index';
import CompleteChallenges from '../compoents/CompleteChallenges';

export default function Home() {
  return (
  <AppContainer>
    <GlobalStyle/>  
    <ExperienceBar/>    
    <section>
      <div>
        <Profile/>
        <CompleteChallenges/>
      </div>
      <div></div>
    </section>
  </AppContainer>
  )
}
