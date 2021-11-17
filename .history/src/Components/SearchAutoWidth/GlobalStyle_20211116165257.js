import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
    }

    body{
        background-color: #192232;
        font-size: 1.2rem;
        ::-webkit-scrollbar{
            width: 8px;
        }
        ::-webkit-scrollbar-track{
            background: #4F6877;
        }
        ::-webkit-scrollbar-thumb{
            background: linear-gradient(179.67deg, #EB5757 -12.17%, #6BBE92 67.09%);
            border-radius: 24px;
        }
    }

    .logo{
        font-family: 'Lobster', cursive;
        font-size: 3.5rem;
        padding-bottom: 1rem;
        color: white;
    }

    input::placeholder{
        color: rgba(255, 255, 255, 0.6);
    }

    input, a, button{
        font-family: inherit;
        font-size: inherit;
    }

    .header form .input-control:focus-within{
        width: 100%;
    }
`;

export default GlobalStyle;
