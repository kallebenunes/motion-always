import React, { useEffect, useState } from 'react'
import Container, { BarFill } from './styles'


const ExperienceBar = () => {
    
    const [defineFill, setdefineFill] = useState('0%')

    function experienceFill(){
        let max = 95; 
        let min = 40;;
        let xp = Math.floor(Math.random() * (max - min + 1)) + min;
        setdefineFill(`${xp}`)
    }

    useEffect(() => {
        experienceFill() 
    },[])
    
    return (
    
           <Container currentXp={defineFill}>
                <span>0 xp</span>
                <div>
                    <BarFill fill={defineFill} />
                    <span  className='current-experience'>{defineFill} xp</span>
                </div>
                <span>600 xp</span>
           </Container>
       
    )
}

export default ExperienceBar
