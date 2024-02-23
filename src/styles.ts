import styled, { createGlobalStyle } from "styled-components";

export const Colors = {
    backgroundColor: '#FFF8F2',
    textColor: '#E66767',
    white: '#FFFFFF',
    rodape: '#FFEBD9'
}

const GlobalConfigs = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: Roboto, sans-serif;
    }

    body {
        background-color: ${Colors.backgroundColor};
        color: ${Colors.textColor}
    }

    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
    }
`

export const Menu = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 80px;
`

export default GlobalConfigs