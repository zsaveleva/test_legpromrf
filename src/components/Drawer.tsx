import React, { FC } from 'react'
import { StyledButton, StyledDiv, StyledFlex } from '../styles'
import styled from 'styled-components'
import { Point, PointProps } from './Point'
import { CloseButton } from './Buttons/CloseButton'
import { ResetFilterButton } from './Buttons/ResetFilterButton'
import { NavyBlueButton } from './Buttons/NavyBlueButton'
import { PointsList } from './PointsList'

const StyledDrawer = styled(StyledDiv)`
    & {
        cursor: default;
    }
`

const firstList: PointProps[] = [
    {
        id: '3km',
        text: 'Меньше 3 км'
    },
    {
        id: '5km',
        text: 'Меньше 5 км'
    },
    {
        id: '10km',
        text: 'Меньше 10 км'
    }
]

const secondList: PointProps[] = [
    {
        id: 'active',
        text: 'Действующее'
    },
    {
        id: 'liquidate',
        text: 'Ликвидированное'
    }
]

const thirdList: PointProps[] = [
    {
        id: 'shoes',
        text: 'Производство обуви'
    },
    {
        id: 'clothes',
        text: 'Производство прочей одежды'
    },
    {
        id: 'trading',
        text: 'Розничная торговля в палатках'
    },
    {
        id: 'hats',
        text: 'Производство головных уборов'
    },
    {
        id: 'cloth',
        text: 'Производство хлопчатобумажных тканей'
    }
]

export const Drawer = (): JSX.Element => {
    return (
        <StyledDrawer
            width='100%'
            height='fit-content'
            padding='20px 120px'
            bc='#fff'
            position='absolute'
            top='60px'
            onClick={e => e.stopPropagation()}
        >
            <StyledFlex
                width='100%'
                justify='space-between'
            >
                <StyledFlex
                    gap='80px'
                    mb='72px'
                >
                    <StyledFlex
                        direction='column'
                        gap='24px'
                    >
                        <PointsList
                            title='По расположению:'
                            data={firstList}
                        />
                        <PointsList
                            title='По статусу:'
                            data={secondList}
                        />
                    </StyledFlex>
                    <PointsList
                        title='По виду деятельности:'
                        data={thirdList}
                    />
                </StyledFlex>
                <StyledFlex
                    direction='column'
                    justify='space-between'
                    align='flex-end'
                >
                    <CloseButton />
                    <StyledFlex
                        gap='8px'
                    >
                        <ResetFilterButton />
                        <NavyBlueButton>
                            Применить
                        </NavyBlueButton>
                    </StyledFlex>
                </StyledFlex>
            </StyledFlex>
        </StyledDrawer>
    )
}
