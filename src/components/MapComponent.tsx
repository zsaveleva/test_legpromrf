import { YMaps, Map } from '@pbe/react-yandex-maps'
import React from 'react'
import { StyledDiv } from '../styles'

export const MapComponent = () => {
    return (
        <YMaps>
            <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} height={'100%'} width={'100%'} />
        </YMaps>
    )
}
