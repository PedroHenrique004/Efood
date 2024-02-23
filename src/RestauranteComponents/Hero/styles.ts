import styled from "styled-components"
import { Colors } from "../../styles"

export const ImagemFundo = styled.img`
    width: 100%; 
    max-height: 280px;
    position: absolute;
    z-index: -1;
`

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 280px;
`

export const NatContainer = styled.div`
    font-size: 32px;
    font-weight: 100;
    position: absolute;
    top: 25px;
    left: 250px;
    color: ${Colors.white};
`

export const NomeContainer = styled.div`
    font-size: 32px;
    font-weight: 900;
    position: absolute;
    top: 214px;
    left: 250px;
    color: ${Colors.white}; 
`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 280px;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 0;
`

