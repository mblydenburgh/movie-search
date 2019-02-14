import React from 'react'
import Styled from 'styled-components'

const Jumbotron = ({title}) => {
    return (
        <JumboDiv>
            <h1>{title}</h1>
        </JumboDiv>
    )
}

export default Jumbotron;

const JumboDiv = Styled.div`
    text-align: center;
    min-height: 300px;
`