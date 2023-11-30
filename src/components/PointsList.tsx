import React, { FC } from 'react'
import { StyledFlex, StyledSpan } from '../styles'
import { Point, PointProps } from './Point'

interface PointsListProps {
    title: string
    data: PointProps[]
}

export const PointsList: FC<PointsListProps> = ({ title, data }): JSX.Element => {
    return (
        <StyledFlex
            direction='column'
            gap='8px'
            width='280px'
        >
            <StyledSpan
                fontSize='14px'
                fontWeight='700'
            >
                {title}
            </StyledSpan>
            {data.map((el) => {
                return (
                    <Point
                        key={el.id}
                        id={el.id}
                        text={el.text}
                    />
                )
            })}
        </StyledFlex>
    )
}
