import styled from 'styled-components';
type PropsContainer = {
    currentXp: string;
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
`;

export default Container

type FillProps = {
    fill: string;
}
export const BarFill = styled.div`
    width: ${(props: FillProps) => `${props.fill}%`};
    background: var(--green);
    height: 4px;
` 
