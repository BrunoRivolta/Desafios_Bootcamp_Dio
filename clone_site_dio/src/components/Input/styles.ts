import styled from "styled-components"

export const InputContainer = styled.div`
    width: 100%;
    max-width: 275px;
    border-bottom: 1px solid #383450;
    
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

export const IconContainer = styled.div`
    margin-right: 10px;
`

export const InputText = styled.input`
    background-color: transparent;
    color: #FFFFFF;
    width: 100%;
    border: 0;
    height: 30px;
`
export const ErrorText = styled.p`
    font-family: "Open Sans";
    font-style: normal;
    color: #FF0000;
    font-size: 12px;
    margin: 10px 0;
`