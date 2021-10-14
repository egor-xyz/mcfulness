import { FC } from "react";
import styled from "styled-components";
import logo from 'assets/McHeart.png';
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  a {
    text-align: center;
  }
  img {
    width: 40%;
  }
`;

export const Home: FC = () => (
  <Wrapper>
    <div>
      <h1>McHeart</h1>
      <Link to='/face'>
        <img src={logo} alt="logo" />
      </Link>
      <Link to='/player'>Player</Link>
    </div>
  </Wrapper >
);