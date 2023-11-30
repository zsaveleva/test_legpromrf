import React, { FC } from 'react'
import { FilterButton } from './Buttons/FilterButton'
import { StyledDiv, StyledFlex } from '../styles'
import { MapComponent } from './MapComponent'
import { CardsList } from './CardsList'

export const Main = (): JSX.Element => {
    return (
        <main>
            <StyledDiv>
                <StyledFlex>
                    <StyledDiv
                        padding='20px 28px 20px 120px'
                        width='50%'
                    >
                        <FilterButton />
                        <StyledDiv
                            mt='32px'
                        >
                            <CardsList />
                        </StyledDiv>
                    </StyledDiv>
                    <StyledDiv
                        width='50%'
                        height='100vh'
                        position='fixed'
                        right='0'
                    >
                        <MapComponent />
                    </StyledDiv>
                </StyledFlex>
            </StyledDiv>
        </main >
    )
}
