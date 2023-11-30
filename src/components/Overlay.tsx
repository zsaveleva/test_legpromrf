import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { StyledDiv } from '../styles'
import { Drawer } from './Drawer'
import { setFilter } from '../store/reducers/filterSlice'

const StyledOverlay = styled(StyledDiv) <{ active: boolean }>`
    & {
        opacity: ${props => props.active ? 1 : 0};
        pointer-events: ${props => props.active ? 'all' : 'none'};
        cursor: ${props => props.active ? 'pointer' : ''};
        backdrop-filter: blur(8px);
        transition: opacity .2s;
    }
`

export const Overlay = () => {
    const dispatch = useDispatch()
    const filterState = useSelector((state: RootState) => state.filter.value)
    return (
        <StyledOverlay
            position='fixed'
            bc='rgba(188, 188, 195, 0.50)'
            top='0'
            left='0'
            width='100%'
            height='100%'
            active={filterState}
            onClick={() => dispatch(setFilter(false))}
        >
            <Drawer />
        </StyledOverlay>
    )
}
