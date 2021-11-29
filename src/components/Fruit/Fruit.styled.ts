import styled from "@emotion/styled";
interface IFruitProps {
  size?: number;
}

export default styled.div<IFruitProps>`
    margin: 5px;
    img{
        width: ${props => (props.size)}0px;
    }
`