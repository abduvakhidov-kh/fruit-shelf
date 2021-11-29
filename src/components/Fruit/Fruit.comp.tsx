import React from 'react'
import lemon from '../../assets/img/lemon.png'
import FruitStyled from './Fruit.styled'

interface IFruitProps {
    kind?: string;
    size?: number;
}

const defaultProps: IFruitProps = {
    kind: lemon,
    size: 2
};

export default function Fruit ({kind, size}: IFruitProps) {

    return(
      <FruitStyled size={size}>
          <img src={kind} alt=""/>
      </FruitStyled>
    );
}

Fruit.defaultProps = defaultProps;