import React from 'react'
import styled from 'styled-components'

const Msg = styled.span`
    display: block;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    color: #333;
    padding: 20px 0px;
    margin: 10px auto;

    @media {
        padding: 10px 0; 
        font-size: 24px;
    }
`

export default function Message({text, ...props}) {
    return (
        <Msg { ...props}>
            {text}
        </Msg>
    )
}
