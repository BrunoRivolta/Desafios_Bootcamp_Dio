import styled from 'styled-components'

export const ItemContainer = styled.div`
    width: 80%;

    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }

    p {
        font-size: 19px;
        color: #FAFAFA60;
        margin-botton: 20px;
    }

    a {
        text-decoration: none;
        color: #2f85e0;
    }

    a: link {
        text-decoration: none;
    }

    a.remover {
        color: #c41616;
        margin-top: 10px;
    }

    a: hover {
        color: #5798de;
        cursor: pointer;
    }

    a.remover: hover {
        color: #f04d4d;
        cursor: pointer;
    }

    hr {
        color: #FAFAFA60
        margin: 20px 0;
    }
`