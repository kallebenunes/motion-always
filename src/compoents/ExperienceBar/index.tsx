import React, { useContext, useEffect, useState } from 'react'
import { ChallengesContext } from '../../contexts/ChallengesContext'
import Container, { BarFill } from './styles'


const ExperienceBar = () => {
    
    const [defineFill, setdefineFill] = useState(0)

    const {currentExperience,experienceToNextLevel} = useContext(ChallengesContext)

    useEffect(() => {
        setdefineFill((currentExperience * 100)/experienceToNextLevel)
    },[currentExperience])
    
    return (
    
           <Container currentXp={defineFill}>
                <span>0 xp</span>
                <div>
                    <BarFill fill={defineFill} />
                    {currentExperience > 0 ? <span  className='current-experience'>{currentExperience} xp</span> : null}
                </div>
                <span>{experienceToNextLevel} xp</span>
           </Container>
       
    )
}

export default ExperienceBar
