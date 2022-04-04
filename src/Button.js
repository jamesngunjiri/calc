import React from "react";
import styled from "styled-components";

const Button = ({ text, btn, handleCalculate }) => {
  return (
    <Container btn={btn} onClick={() => handleCalculate(btn)}>
      {text}
    </Container>
  );
};

export default Button;
const Container = styled.div`
  background-color: blue;
  border-radius: 5px;
  padding: 5px;
  text-align: center;
  color: #ccc;
  font-weight: bold;
  box-shadow: 2px 2px 2px rgba(255, 255, 255, 0.6),
    -2px -2px 2px rgba(255, 255, 255, 0.6);
  transition: 250ms all ease;
  &:hover {
    background-color: #3b83d6;
  }
`;
