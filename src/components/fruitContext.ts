import React from "react";

const FruitKindContext = React.createContext('');
const FruitSizeContext = React.createContext(1);

const FruitKindProvider = FruitKindContext.Provider;
const FruitSizeProvider = FruitSizeContext.Provider;

const FruitKindConsumer = FruitKindContext.Consumer;
const FruitSizeConsumer = FruitSizeContext.Consumer;

export { FruitKindProvider, FruitKindConsumer, FruitSizeProvider, FruitSizeConsumer }