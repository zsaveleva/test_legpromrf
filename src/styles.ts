import styled from 'styled-components'

export interface BaseProps {
    margin?: string
    padding?: string
    br?: string
    bc?: string
    fontSize?: string
}

interface StyledDivProps extends BaseProps {
    width?: string
    mw?: string
    height?: string
    boxShadow?: string
    position?: string
    top?: string
    right?: string
    left?: string
    mt?: string
    mb?: string
}

interface StyledFlexProps extends StyledDivProps {
    direction?: string
    justify?: string
    align?: string
    gap?: string
}

interface StyledButtonProps extends BaseProps, Pick<StyledFlexProps, 'gap'> {
    color?: string
}

interface StyledSpanProps extends Pick<StyledButtonProps, 'color' | 'fontSize'> {
    fontWeight?: string
}

export const StyledDiv = styled.div<StyledDivProps>`
    & {
        width: ${props => props.width || ''};
        max-width: ${props => props.mw || ''};
        margin: ${props => props.margin || ''};
        padding: ${props => props.padding || ''};
        height: ${props => props.height || ''};
        border-radius: ${props => props.br || ''};
        box-shadow: ${props => props.boxShadow || ''};
        background-color: ${props => props.bc || ''};
        position: ${props => props.position || ''};
        top: ${props => props.top || ''};
        right: ${props => props.right || ''};
        left: ${props => props.left || ''};
        margin-top: ${props => props.mt || ''};
        margin-bottom: ${props => props.mb || ''};
        font-size: ${props => props.fontSize || ''};
    }
`

export const StyledFlex = styled(StyledDiv) <StyledFlexProps>`
    & {
        display: flex;
        flex-direction: ${props => props.direction || 'row'};
        justify-content: ${props => props.justify || ''};
        align-items: ${props => props.align || ''};
        gap: ${props => props.gap || ''};
        font-size: ${props => props.fontSize || '14px'};
    }
`

export const StyledButton = styled.button<StyledButtonProps>`
    & {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        border: none;
        cursor: pointer;
        font-size: ${props => props.fontSize || '14px'};
        border-radius: ${props => props.br || '8px'};
        padding: ${props => props.padding || '10px 12px'};
        background-color: ${props => props.bc || ''};
        color:  ${props => props.color || '#181818'};
        gap: ${props => props.gap || ''};
    }
`

export const StyledP = styled.p`
    & {
        font-size: 12px;
        font-weight: 500;
    }
`
export const StyledSpan = styled.span<StyledSpanProps>`
    & {
        color:  ${props => props.color || '#181818'};
        font-weight: ${props => props.fontWeight || '400'};
    }
`
