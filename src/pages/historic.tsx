import React, { useContext, useEffect, useState } from 'react'
import GlobalStyle, { AppContainer } from './GlobalStyle'
import HisctoricContainer from './style/historic-style'
import {GetServerSideProps} from 'next'
import Link from 'next/link'
type HistoricProps = {
    historic: string;
}


const Historic = (props: HistoricProps) => {

   let historic = JSON.parse(props.historic )
  
    return (
        <AppContainer>       
            <GlobalStyle/>
            <HisctoricContainer>
            <Link href='/'>Página inicial</Link>
            { historic 
            ? (
                historic.map(item => {
                    return (
                        <div key={item.challengesCompleteds} className='experience'>
                            
                            <div className="experience__left">
                                <p className=''>{item.lastAmount} <br/> XP </p>
                            </div>

                            <div className="experience__right">
                                <div className='date'> {item.fullDate}</div>
                                <div className='completedChallenges'>Desafios concluídos: {item.challengesCompleteds}</div>
                            </div>
                        </div>
                    )
                })
            )
            : <div>Nenhum desafio foi concluído</div>}
            
            </HisctoricContainer>
        </AppContainer>
    )
}

export default Historic

export const getServerSideProps:GetServerSideProps = async (ctx) => {

    let {historic} = ctx.req.cookies
    
     
     
    return {props: {historic: historic || null}}
}


