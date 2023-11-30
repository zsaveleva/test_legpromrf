import React from 'react'
import { StyledFlex } from '../styles'
import { Card } from './Card'
import { Company } from '../types'

const data: Company[] = [
    {
        id: 1,
        name: 'ООО «Тест»',
        address: 'Тестовая ул., дом 4',
        inn: 123456789012
    },
    {
        id: 2,
        name: 'ООО «Тест»',
        address: 'Тестовая ул., дом 4',
        inn: 123456789012
    },
    {
        id: 3,
        name: 'ООО «Тест»',
        address: 'Тестовая ул., дом 4',
        inn: 123456789012
    },
    {
        id: 4,
        name: 'ООО «Тест»',
        address: 'Тестовая ул., дом 4',
        inn: 123456789012
    },
    {
        id: 5,
        name: 'ООО «Тест»',
        address: 'Тестовая ул., дом 4',
        inn: 123456789012
    },
    {
        id: 6,
        name: 'ООО «Тест»',
        address: 'Тестовая ул., дом 4',
        inn: 123456789012
    },
    {
        id: 7,
        name: 'ООО «Тест»',
        address: 'Тестовая ул., дом 4',
        inn: 123456789012
    }
]

export const CardsList = () => {
    return (
        <StyledFlex
            direction='column'
            gap='12px'
            width='100%'
        >
            {data.map((el) => {
                return (
                    <Card
                        key={el.id}
                        name={el.name}
                        address={el.address}
                        inn={el.inn}
                    />
                )
            })}
        </StyledFlex>
    )
}
