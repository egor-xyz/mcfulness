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
    margin: 20px auto;
    text-decoration: none;
    text-align: center;
    color: #635b5b;
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
      <div>
        <Link to='/player'>Show Player</Link>
      </div>
    </div>
  </Wrapper >
);