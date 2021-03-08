import styled from 'styled-components';

const Container = styled.div`
  > div {
    flex: 1;
    display: flex;
    align-items: center;
    font-family: Rajdhani; 
    font-weight: 600;
    color: var(--title);

       div {
        flex: 1;
        background: var(--white);
        display: flex; 
        align-items: center;
        justify-content: space-evenly;
        box-shadow: 0 0 60px rgba(0,0,0,0.05);
        border-radius: 5px;
        font-size: 8.5rem; 
        text-align: center;


      }

       div span {
        flex: 1; 
      }

      div span + span {
        border-left: 2px solid #f2f3f0;
      }

      > span {
        font-size: 6.25rem; 
        margin: 0 0.5rem;
      }
  } 
  
  button {
    width: 100%; 
    height: 5rem; 

    margin-top: 2rem; 
    display: flex;
    align-items: center; 
    justify-content: center; 

    border: 0;
    border-radius: 5px;

    color: var(--white); 
    background: var(--blue);
    font-weight: 600;
    transition: 0.2s;
  }

  button:hover {
    background: var(--blue-dark);
  }

  button.active{
    background: var(--gray-line);
    color: var(--white);
  }

  button.active:hover{
    background: var(--red)
  }
  
  button:disabled {
    background: var(--white);
    color: var(--text);
    cursor: not-allowed;
  }

  @media (max-width: 720px) {
    span {
      font-size: 10rem;
    }
  }
`;

export default Container