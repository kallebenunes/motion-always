import { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengesContext';
import Container from './styles'
import Link from 'next/link'

const Profile = () => {
    
    const {level} = useContext(ChallengesContext);
    
    return (
        <Container>
            <img src="https://avatars.dicebear.com/4.5/api/male/kallebenm.svg" alt="Kallebe Nunes"/>
            <div>
                <strong>Kallebe Nunes</strong>
                <p> <img src="icons/level.svg" alt="" /> Level {level} </p>
                <Link href='/historic'>Ver histórico</Link>
            </div>
        </Container>
    )
}

export default Profile
