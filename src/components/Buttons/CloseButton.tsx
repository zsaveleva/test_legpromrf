import React from 'react'
import { StyledButton } from '../../styles'
import { useDispatch } from 'react-redux'
import { setFilter } from '../../store/reducers/filterSlice'

export const CloseButton = () => {
    const dispatch = useDispatch()
    return (
        <StyledButton
            fontSize='12px'
            gap='8px'
            color='#9F9F9F'
            bc='transparent'
            onClick={() => dispatch(setFilter(false))}
        >
            Скрыть
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <g clipPath="url(#clip0_2_6492)">
                    <path d="M7.06093 6.00023L11.7807 1.28093C12.0737 0.987948 12.0737 0.512936 11.7807 0.219979C11.4878 -0.0730009 11.0127 -0.0730009 10.7198 0.219979L6.00047 4.93977L1.28117 0.219979C0.988192 -0.0730009 0.51318 -0.0730009 0.220223 0.219979C-0.0727333 0.512959 -0.0727568 0.987971 0.220223 1.28093L4.94001 6.00023L0.220223 10.7195C-0.0727568 11.0125 -0.0727568 11.4875 0.220223 11.7805C0.513204 12.0735 0.988215 12.0735 1.28117 11.7805L6.00047 7.06068L10.7198 11.7805C11.0127 12.0735 11.4878 12.0735 11.7807 11.7805C12.0737 11.4875 12.0737 11.0125 11.7807 10.7195L7.06093 6.00023Z" fill="#9F9F9F" />
                </g>
                <defs>
                    <clipPath id="clip0_2_6492">
                        <rect width="12" height="12" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </StyledButton>
    )
}
