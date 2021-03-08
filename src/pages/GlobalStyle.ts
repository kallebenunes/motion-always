import styled,{ createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    
    :root {
    --white: #fff; 
    --background: #f2f3f5; 
    --gray-line:  #DCDDE0;; 
    --text: #666666;
    --text-highlight: #B3B9FF;
    --title: #2E384D; 
    --red: #E83F5B; 
    --green: #4CD62B;
    --blue: #5965E0;
    --blue-dark: #4953B8; 
    --blue-twitter: #2AA9E0;
    }

    @media(max-width: 1080px){
        html {
            font-size: 93.75%;
        }
    }
   

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background: var(--background);
        color: var(--text);
    }

    body, input, textarea, button {
        font-family: "Inter", sans-serif;
    }

    button {
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    section {
        flex: 1;
        display: grid; 
        grid-template-columns: 1fr 1fr; 
        gap: 6.25rem; 
        align-content: center;
    }

    @media(max-width: 720px){
       

        html {
            font-size: 87.5%;
        }

        section {
            grid-template-columns: 1fr;
            padding-bottom: 2rem;
        }
    }
`;

export const AppContainer = styled.main`
    height: 100vh;
    max-width: 992px;
    margin: 0 auto;
    padding: 2rem 2.5rem;

    display: flex;
    flex-direction: column;
`