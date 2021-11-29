import React from 'react'
import FruitShelfStyled from './FruitShelf.styled'

interface IFruitShelfProps{
    children: React.ReactNode;
}

export default function FruitShelf({children}:IFruitShelfProps){

    return(
        <FruitShelfStyled>
            {children}
        </FruitShelfStyled>
    );
} 