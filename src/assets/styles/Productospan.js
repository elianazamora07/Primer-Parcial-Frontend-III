import styled from "styled-components";

export const Productospan = styled.span`
  background-color: ${props => props.stock ? "rgb(118, 186, 153)" : "rgb(255, 178, 178)"};
  padding: 3px;
  font-weight: lighter;
  color: ${props => props.stock ? "rgb(0,0,0)" : "rgb(155, 0, 0)"};
  border-radius: 3px;
`;
