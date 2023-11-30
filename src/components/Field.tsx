import React, { FC } from 'react'
import { StyledP, StyledSpan } from '../styles'

interface FieldProps {
    field_name: string
    value: string | number
}

export const Field: FC<FieldProps> = ({ field_name, value }): JSX.Element => {
    return (
        <StyledP>
            <StyledSpan
                color="#9F9F9F"
            >
                {field_name}
            </StyledSpan>
            <StyledSpan> {value}</StyledSpan>
        </StyledP>
    )
}
