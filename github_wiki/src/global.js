import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

    * {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: #22272E;
        color: #FFFFFF;
    }
`

export { GlobalStyle }
