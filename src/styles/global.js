import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 :root {
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;
    --color-gray-4: #121214;
    --color-gray-3: #212529;
    --color-gray-2: #343B41;
    --color-gray-1: #868E96;
    --color-gray-0: #F8F9FA;
    --color-success: #168821;
    --color-error: #E60000;
    font-size: 60%;   
  }
  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }
  body,html{
    width: 100vw;
    height: 100vh;
  }
  body {
    background: var(--color-gray-4);
    color: var(--color-gray-1);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  body, input, button, textarea {
    font-family: 'Roboto';
    font-size: 1.6rem;
  }
  h1, h2, h3 {
    font-weight: bold;
  }
 h4,h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--color-text-focus);
    margin: 1rem;
    border-radius: 1.6rem;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color-primary-negative);
    border-radius: 1.6rem;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary);
  }
`;
