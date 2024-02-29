import { styled } from "styled-components";
import { Colors } from "../../styles";

export const Container = styled.div`
    margin: 0 auto;
    max-width: 1024px;
`

export const ContainerCards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
    margin-top: 56px;
`

export const CardAlimento = styled.div`
    background-color: ${Colors.textColor};
    max-width: 340px;
    width: 100%;
    height: 350px;
    padding: 8px;

    img {
        width: 100%;
    }
    
    h4,p {
        color: ${Colors.backgroundColor};
    }

    h4 {
        font-size: 16px;
        font-weight: 900;
        margin: 8px 0;
    }

    p {
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        margin-bottom: 8px;
    }

    button {
        width: 100%;
        padding: 4px 80px;
        background-color: ${Colors.backgroundColor};
        color: ${Colors.textColor};
        font-weight: 700;
        font-size: 14px;
        border: none;
        margin-top: 8px;
        white-space: nowrap;
    }

`