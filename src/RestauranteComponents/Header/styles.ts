import styled from "styled-components";
import backgroundImage from '../../images/fundo.png'
import { Colors } from "../../styles";

export const HeaderContainer = styled.header`
    background-image: url(${backgroundImage});

    div {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        width: 100%;
        height: 180px;
        text-align: center;
        justify-content: space-between;
    }
    
`
export const Text = styled.p`
    color: ${Colors.textColor};
    font-weight: 900;
    font-size: 18px;
    line-height: 21px;
`

export const Container = styled.div`
    max-width: 1024px;
    width: 100%;
`
