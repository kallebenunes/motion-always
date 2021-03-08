import styled,{css} from 'styled-components';

const Container = styled.div`

  height: 100%;
  background: var(--white); 
  box-shadow: 0 0 60px rgba(0,0,0,0.05);
  padding: 1.5rem 2rem; 

  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  text-align: center;

  .challengeNotActive {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .challengeNotActive strong {
    font-size: 1.5rem; 
    font-weight: 500; 
    line-height: 1.4;
  }

  .challengeNotActive p {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.4rem; 
    max-width: 70%;
    margin-top: 3rem;
    
    img {
      margin-bottom: 1rem;
    }
  }

  .challengeActive {
    
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    header {
      width: 100%;
      color: var(--blue);
      font-weight: bold;
      border-bottom: 1px solid var(--gray-line);
      padding-bottom: 1.5rem;
    }
    
    main {
      /* background: red; */
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content:  center;
      align-items: center;
      
      img {
        width: 50%;
        margin-bottom: 2rem;
      }
      
      strong {
        font-size: 1.7rem;
        color: var(--title);
        margin-bottom: 1rem;
      }

      p {
        font-size: 1.4rem; 
        color: var(--text);
        font-weight: lighter;
      }

      
    }

    footer {
      /* background: blue; */

      display: flex; 
      width: 100%;

      button {
        padding: 1rem 0;
        flex: 1;
        border: 0; 
        color: var(--white); 
        border-radius: 5px; 
        margin: 0.5rem;
        transition: .2s; 
        font-weight: 600;
      }

      button:hover {
        filter: brightness(0.85);
      }

      .challengeSucceeded {
        background: var(--green);
      
      }
      .challengeFailed {
        background: var(--red);
      }


    }
  
  }



  
`;

export default Container