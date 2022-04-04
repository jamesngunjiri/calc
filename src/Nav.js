import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  const [visited, setVisited] = useState(false);
  return (
    <Container>
      <Wrapper2>
        <Link to="/">
          <p>Calculator</p>
        </Link>
        <Link to="/formulas">
          <p>Math Formulas</p>
        </Link>
      </Wrapper2>
    </Container>
  );
};

export default Nav;
const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.2) 10px 20px 30px;
  position: fixed;
  color: #ccc;
  a {
    text-decoration: none;
    color: #ccc;
  }
`;
const Wrapper2 = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  p {
    font-style: bold;
    cursor: pointer;
    position: relative;
    text-align: center;
    height: 50%;
    &:hover {
      &::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-bottom: 2px solid #ccc;
      }
    }
  }
`;
