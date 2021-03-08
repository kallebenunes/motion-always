import styled from 'styled-components';
type PropsContainer = {
    currentXp: number;
}

const Container = styled.header`
    display: flex; 
    align-items: center; 

    span {
        font-size: 1rem;
    }

    > div {
        flex: 1; 
        height: 4px; 
        border-radius: 4px;
        background: var(--gray-line);
        margin: 0 1.5rem;
        position: relative;
    }

    .current-experience {
        position: absolute;
        left: ${(props: PropsContainer) => props.currentXp+'%'};
        transform: translateX(-50%);
        top: 12px;
        
    }

    @media (max-width: 720px){
        margin-bottom: 2rem;
    }
`;

export default Container

type FillProps = {
    fill: number;
}
export const BarFill = styled.div`
    width: ${(props: FillProps) => `${props.fill}%`};
    background: var(--green);
    height: 4px;
` 
