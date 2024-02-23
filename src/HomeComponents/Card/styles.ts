import styled from "styled-components";
import { Colors } from "../../styles";


export const CardContainer = styled.div`
    margin-top: 80px;
    max-width: 472px;
    width: 100%;
    background-color: ${Colors.white};
    border: 1px solid ${Colors.textColor};
    position: relative;

`

export const TagContainer = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;

    p {
        padding: 8px 4px;
        background-color: ${Colors.textColor};
        color: ${Colors.backgroundColor};
        display: inline-block;
        font-size: 12px;
        font-weight: 700;
        margin-left: 8px;
    }

`

export const NameNote = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    text-align: center;
    margin-bottom: 16px; // passar para o p?
    margin-left: 8px;

    div {
        display: flex;
        justify-content: space-between;
        margin-right: 8px;
        text-align: center;

        h3 {
            margin-right: 8px;
        }
         img {
            max-width: 21px;
            height: 21px;
         }
    }
` 

export const Description = styled.p`
    margin: 0 8px;
    font-size: 14px;
    line-height: 22px;
`

export const Button = styled.button`
    padding: 4px 8px;
    background-color: ${Colors.textColor};
    color: ${Colors.white};
    border: none;
    margin-top: 16px;
    margin-bottom: 8px;
    margin-left: 8px;
    cursor: pointer;
`