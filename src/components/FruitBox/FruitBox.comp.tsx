import React from 'react'
import FruitBoxStyled from './FruitBox.styled'
import { FruitKindProvider, FruitSizeProvider } from "../fruitContext";

interface IFruitBoxProps{
    defaultKind: string;
    defaultSize: number;
    children: React.ReactNode;
}

export default class FruitBox extends React.Component<IFruitBoxProps>{

    render() {
        return <FruitBoxStyled>
            <FruitSizeProvider value={this.props.defaultSize}>
                <FruitKindProvider value={this.props.defaultKind}>
                    {this.props.children}
                </FruitKindProvider>
            </FruitSizeProvider>
        </FruitBoxStyled>
    }
}