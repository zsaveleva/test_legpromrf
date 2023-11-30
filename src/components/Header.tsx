import React from 'react'
import styled from 'styled-components'
import { StyledDiv } from '../styles'

const StyledHeader = styled('header')`
    & {
        border-bottom: 1px solid #F2F2F2;
        background: #FEFEFE;
        height: 60px;
        position: sticky;
        top: 0;
        z-index: 100;
    }
`

export const Header = (): JSX.Element => {
    return (
        <StyledHeader>
            <StyledDiv
                padding='0px 120px'
            >
            </StyledDiv>
        </StyledHeader>
    )
}
