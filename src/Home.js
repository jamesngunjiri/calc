import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
/* eslint no-eval: 0 */

const Home = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("0");

  const handleCalculate = (btn) => {
    if (btn === "btn0") {
      if (input === "0") {
        setInput("0");
      } else {
        setInput(input + "0");
      }
    } else if (btn === "btn1") {
      setInput(input + "1");
    } else if (btn === "btn2") {
      setInput(input + "2");
    } else if (btn === "btn3") {
      setInput(input + "3");
    } else if (btn === "btn4") {
      setInput(input + "4");
    } else if (btn === "btn5") {
      setInput(input + "5");
    } else if (btn === "btn6") {
      setInput(input + "6");
    } else if (btn === "btn7") {
      setInput(input + "7");
    } else if (btn === "btn8") {
      setInput(input + "8");
    } else if (btn === "btn9") {
      setInput(input + "9");
    } else if (btn === "btndot") {
      setInput(input + ".");
    } else if (btn === "btndivide") {
      setInput(input + "/");
    } else if (btn === "btnmultiply") {
      setInput(input + "*");
    } else if (btn === "btnsubtract") {
      setInput(input + "-");
    } else if (btn === "btnadd") {
      setInput(input + "+");
    } else if (btn === "btnequals") {
      setResult(eval(input));
      setInput("");
    } else if (btn === "btncancel") {
      setInput(input.slice(0, -1));
      setResult("0");
    }
  };
  return (
    <Container>
      <TitleSection>
        <h2>Simple Calculator</h2>
        <p>📱 </p>
      </TitleSection>
      <InputSection>
        <input
          type="text"
          name="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
        />
      </InputSection>
      <OutputSection>
        <p>{result}</p>
      </OutputSection>
      <CancelSection>
        <Button text="C" btn="btncancel" handleCalculate={handleCalculate} />
      </CancelSection>
      <ButtonsSection>
        <Button text="7" btn="btn7" handleCalculate={handleCalculate} />
        <Button text="8" btn="btn8" handleCalculate={handleCalculate} />
        <Button text="9" btn="btn9" handleCalculate={handleCalculate} />
        <Button text="÷" btn="btndivide" handleCalculate={handleCalculate} />
        <Button text="4" btn="btn4" handleCalculate={handleCalculate} />
        <Button text="5" btn="btn5" handleCalculate={handleCalculate} />
        <Button text="6" btn="btn6" handleCalculate={handleCalculate} />
        <Button text="x" btn="btnmultiply" handleCalculate={handleCalculate} />
        <Button text="1" btn="btn1" handleCalculate={handleCalculate} />
        <Button text="2" btn="btn2" handleCalculate={handleCalculate} />
        <Button text="3" btn="btn3" handleCalculate={handleCalculate} />
        <Button text="-" btn="btnsubtract" handleCalculate={handleCalculate} />
        <Button text="." btn="btndot" handleCalculate={handleCalculate} />
        <Button text="0" btn="btn0" handleCalculate={handleCalculate} />
        <Button text="=" btn="btnequals" handleCalculate={handleCalculate} />
        <Button text="+" btn="btnadd" handleCalculate={handleCalculate} />
      </ButtonsSection>
    </Container>
  );
};

export default Home;
const Container = styled.div`
  width: 50%;
  height: calc(100vh - 50px);
  margin: auto;
  box-shadow: rgba(0, 0, 0, 0.2) 10px 20px 30px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const TitleSection = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  color: #ccc;
  p {
    margin-right: 10px;
    font-size: 25px;
  }
`;
const InputSection = styled.div`
  width: 92%;
  margin: 0 auto;
  input {
    width: 95%;
    padding: 5px;
    outline: none;
    border: none;
    background-color: transparent;
    text-align: end;
    color: #ccc;
    font-style: bold;
    font-size: 25px;
    box-shadow: inset 8px 8px 8px rgba(0, 0, 0, 0.2),
      inset -8px -8px 8px rgba(0, 0, 0, 0.2);
  }
`;
const OutputSection = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  p {
    font-style: bold;
    font-size: 25px;
    color: #ccc;
    padding: 0 5px;
  }
`;
const CancelSection = styled.div`
  width: 95%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 5px 0;
  div {
    width: 23%;
  }
`;
const ButtonsSection = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 5px;
`;
