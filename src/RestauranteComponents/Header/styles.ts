import styled from "styled-components";
import backgroundImage from '../../images/fundo.png'
import { Colors } from "../../styles";

export const HeaderContainer = styled.header`
    background-image: url(${backgroundImage});
    display: flex;
    align-items: center;
    width: 100%;
    height: 180px;
    text-align: center;
    justify-content: space-around;
    
`
export const Text = styled.p`
    color: ${Colors.textColor};
    font-weight: 900;
    font-size: 18px;
    line-height: 21px;
`
