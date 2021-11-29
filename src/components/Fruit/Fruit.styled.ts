import styled from "@emotion/styled";
interface IFruitProps {
  size?: number;
}

export default styled.div<IFruitProps>`
  img {
    width: ${(props) => props.size}00px;
  }
`;
