import React from 'react'
import { HeroesList } from '../heroes/HeroesList';

export const DcScreen = () => {
    return (
        <div>
            <h1>Dc screen</h1>
            <HeroesList publisher="DC Comics" />
        </div>
    )
}
