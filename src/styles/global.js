import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing:border-box;
        margin: 0;
        padding: 0;
        outline: 0;
        font-size: 16px;
        font-family: 'Space Mono', monospace;
        
    }
    :root {
        --mainGray: #F1F1F1;
    }
    button:hover {
        cursor: pointer;
    }
    body {
        min-height: 100%;
        position: absolute;
        max-width: 100vw;
        width: 100%;
        height: 100%;
    }
    ul {
        list-style: none;
    }
    a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
    }
    main {
        margin-top: 50px;
    }
`;
