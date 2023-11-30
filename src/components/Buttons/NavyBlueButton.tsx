import React, { FC, ReactNode } from 'react'
import { StyledButton } from '../../styles'

export const NavyBlueButton: FC<{ children: ReactNode }> = ({ children }): JSX.Element => {
    return (
        <StyledButton
            color="#fff"
            bc="#004E6F"
        >
            {children}
        </StyledButton>
    )
}
