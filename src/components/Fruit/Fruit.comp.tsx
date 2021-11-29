import React from "react";
import FruitStyled from "./Fruit.styled";
import { FruitKindConsumer, FruitSizeConsumer } from "../fruitContext";

interface IFruitProps {
  kind?: string | null;
  size?: number;
}

const defaultProps: IFruitProps = {
  kind: null,
  size: 1,
};

export default function Fruit({ kind, size }: IFruitProps) {
  return (
    <div>
      {kind != null ? (
        <FruitStyled size={size}>
          <img src={kind} alt="" />
        </FruitStyled>
      ) : (
        <FruitSizeConsumer>
          {(fruitBoxSize) => {
            return (
              <FruitStyled size={fruitBoxSize}>
                <FruitKindConsumer>
                  {(fruitBoxKind) => {
                    return <img src={fruitBoxKind} alt="" />;
                  }}
                </FruitKindConsumer>
              </FruitStyled>
            );
          }}
        </FruitSizeConsumer>
      )}
    </div>
  );
}

Fruit.defaultProps = defaultProps;
