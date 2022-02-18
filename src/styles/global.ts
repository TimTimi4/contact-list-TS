import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle<any>`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  button {
    -webkit-tap-highlight-color: transparent;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`

