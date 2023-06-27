import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --color-color-primary: #ff577f;
    --color-color-primary-50: #ff427f;
    --color-color-primary-disable: #59323f;
    --color-grey-4: #121214;
    --color-grey-3: #212529;
    --color-grey-2: #343b41;
    --color-grey-1: #868e96;
    --color-grey-0: #f8f9fa;
    --color-sucess: #3fe864;
    --color-negative: #e83f5b;

    --font-primary: 'Inter', sans-serif;
  }

  body {
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    background-color: var(--color-grey-4);
  }

  html, body, input, button, textarea {
    font-family: 'Inter', sans-serif;
  }

  button{
    cursor: pointer;
    background: transparent;
    border: none;
  }

  ul, ol{
    list-style: none;
  }

  a{
    text-decoration: none;
  }

  input, textarea{
    border: 0;
    background: transparent;
  }

  .toast-sucess,
  .toast-error {
    z-index: 200;
  }

  .toast-sucess,
  .toast-error {
    background-color: var(--color-grey-2);
    color: var(--color-grey-0);
    font-family: 'Inter', sans-serif;
  }

  .toast-sucess img,
  .toast-sucess svg {
    fill: var(--color-sucess);
    width: 28px;
    height: 28px;
  }

  .toast-error img,
  .toast-error svg {
    fill: var(--color-negative);
    width: 28px;
    height: 28px;
  }
`;
