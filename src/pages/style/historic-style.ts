import styled from 'styled-components';
const HisctoricContainer = styled.div`
  a {
    max-width: 50%; 
    margin: 0 auto 1rem auto;
    text-align: right;
    display: block;
  }
  .experience {
    background: var(--white);
    max-width: 50%;
    margin: 0 auto;
    margin-bottom: 1rem;
    display: flex; 
    align-items: center;
    font-size: 1.2rem;
    /* justify-content: space-around; */
    /* flex-direction: column; */
  }

  .experience__left{
    border: 3px solid var(--blue);
    width: 8rem; 
    height: 8rem;
    border-radius: 50%; 
    display: flex; 
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 2rem;
  }
  
  .experience__right {
    text-align: center;
  }

  .date {
    margin-bottom: 0.5rem;
  }


  @media (max-width: 800px) {
    .experience {
      max-width: 100%;
      display: flex;
      justify-content: center;
    }

    .experience__left{
      margin-left: 0;
    }
  }
`;

export default HisctoricContainer