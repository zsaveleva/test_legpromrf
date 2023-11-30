import React, { FC } from 'react'
import { StyledFlex } from '../styles'

export interface PointProps {
    id: string
    text: string
}

export const Point: FC<PointProps> = ({ id, text }): JSX.Element => {
    return (
        <StyledFlex
            fontSize='12px'
            gap='12px'
            align='center'
        >
            <input
                style={{ cursor: 'pointer' }}
                type='checkbox'
                id={id}
            />
            <label
                style={{ cursor: 'pointer' }}
                htmlFor={id}
            >
                {text}
            </label>
        </StyledFlex>
    )
}
