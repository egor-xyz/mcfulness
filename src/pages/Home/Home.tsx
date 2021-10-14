import { FC } from "react";
import styled from "styled-components";
import logo from 'assets/McHeart.png';
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  a {
    text-align: center;
  }
  img {
    width: 40%;
  }
`;

export const Home: FC = () => (
  <Wrapper>
    <Link to='/face'>
      <img src={logo} alt="logo" />
    </Link>
  </Wrapper >
);