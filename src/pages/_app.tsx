import App from 'next/app'
import { ChallengeProvider } from "../contexts/ChallengesContext"
import { useEffect } from "react"

function MyApp(appProps) {
  
  return (
    <ChallengeProvider >     
      <appProps.Component {...appProps.pageProps}/>
    </ChallengeProvider>  
        
  )
}
MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);
    
  return {...appProps}
}

export default MyApp
