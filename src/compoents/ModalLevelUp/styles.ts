import styled from 'styled-components';

const Container = styled.div`
  background: rgba(242,243,245,0.8);
  position: fixed; 
  top: 0; 
  right: 0; 
  left: 0;
  bottom: 0;

  display: flex; 
  justify-content: center;
  align-items: center;

  div {
    background: var(--white); 
    width: 100%;
    max-width: 400px; 
    padding: 2rem 3rem;
    box-shadow:0 0 60px rgba(0,0,0,0.05); 
    border-radius: 5px;
    text-align: center;
    position: relative;

    header {
      font-size: 8.75rem;
      font-weight: 600; 
      color: var(--blue); 
      background: url('/icons/levelup.svg')no-repeat center;
      background-size: contain;
    }

    strong {
      font-size: 2.25rem;
      color: var(--title);
    }

    p {
      font-size: 1.25rem; 
      color: var(--text); 
      margin-top: 0.25rem; 
    }

    button {
      position: absolute; 
      right: 0.5rem; 
      top: 0.5rem; 
      background: transparent; 
      border: 0;
      font-size: 0px;
    }
  }


`;

export default Container