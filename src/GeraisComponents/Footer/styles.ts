import styled from "styled-components";
import { Colors } from "../../styles";

export const FooterContainer = styled.section`
    margin-top: 120px;
    background-color: ${Colors.rodape};
    text-align: center;
    justify-content: center;

    .logo  {
        margin-top: 40px;
        margin-bottom: 32px;
    }
`

export const LinksList = styled.ul`
    display: flex;
    justify-content: center;

    li {
        margin: 0 8px;
        margin-bottom: 80px;
    }
`

export const Paragrafo = styled.p`
    font-size:10px;
    max-width: 480px;
    margin: 0px auto;
    padding-bottom: 40px;
`