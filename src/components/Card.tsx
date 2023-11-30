import { FC } from "react"
import { StyledButton, StyledFlex, StyledP, StyledSpan } from "../styles"
import { Company } from "../types"
import styled from "styled-components"
import { Field } from "./Field"
import { NavyBlueButton } from "./Buttons/NavyBlueButton"

interface CardProps extends Omit<Company, 'id'> { }

const StyledTitle = styled.h3`
    & {
        color: #004E6F;
        font-size: 18px;
        font-weight: 700;
    }
`

export const Card: FC<CardProps> = ({ name, address, inn }): JSX.Element => {
    return (
        <StyledFlex
            bc="#fff"
            boxShadow="0px 1px 16px 0px rgba(0, 0, 0, 0.25)"
            br="16px"
            padding="18px"
        >
            <StyledFlex
                direction="column"
                gap="8px"
                width="100%"
            >
                <StyledFlex
                    justify="space-between"
                    align="center"
                >
                    <StyledTitle>{name}</StyledTitle>
                    <NavyBlueButton>
                        Выбрать
                    </NavyBlueButton>
                </StyledFlex>
                <Field
                    field_name="Адрес:"
                    value={address}
                />
                <Field
                    field_name="ИНН:"
                    value={inn}
                />
            </StyledFlex>
        </StyledFlex>
    )
}
