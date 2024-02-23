import styled from "styled-components";
import backgroundImage from '../../images/fundo.png'
import { Colors } from "../../styles";

export const HeaderContainer = styled.header`
    background-image: url(${backgroundImage});
    width: 100%;
    height: 360px;
    text-align: center;

    img {
        margin-top: 40px;
        margin-bottom: 138px;
    }
`
export const Title = styled.div`
    color: ${Colors.textColor};
    font-weight: 900;
    font-size: 36px;
    line-height: 42px;
`
