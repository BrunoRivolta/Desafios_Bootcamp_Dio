import styled from "styled-components"

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Wrapper = styled.div`
    max-width: 350px;
`

export const Columm = styled.div`
    flex: 1;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    margin-top: 20px;
`

export const Title = styled.h2`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFFFFF;
`

export const TitleLogin = styled.p`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 44px;
`

export const SubtitleLogin = styled.p`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-height: 25px;
`
export const Politicas = styled.p`
    font-family: "Open Sans";
    font-size: 16px;
`

export const EsqueciText = styled.p`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    margin-right: 8px;

    color: #FFFFFF;
`

export const CriarText = styled.p`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    color: #23DD7A;

    &:hover {
        opacity: 0.6;
        cursor: pointer;
    }
`