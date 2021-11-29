import React from 'react'
import FruitBoxStyled from './FruitBox.styled'
import Fruit from "../Fruit/Fruit.comp";
import {IFruit} from '../../App';

interface IFruitBoxProps{
    defaultKind: string;
    defaultSize?: number;
    children: React.ReactNode;
    fruits: IFruit[];
}

export default function FruitBox({defaultKind, defaultSize, children, fruits}: IFruitBoxProps){


    return(
      <FruitBoxStyled>
          {fruits.map(({kind,size}) => (
                <Fruit kind={kind} size={size}/>
              )
          )}
      </FruitBoxStyled>
    );
} 