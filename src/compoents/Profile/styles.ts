import styled from 'styled-components';

export default styled.div`
  display: flex;
  align-items: center;

  img {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
  }
  div {
    margin-left: 1.5rem;
  }
  div strong {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--title); 

  }

  div p {
    font-size: 1rem;
    margin-top: 0.5rem;
  }

  div p img { 
  margin-right: 0.3rem;
  max-width: 1rem;
  max-height: 1rem;
  }

`