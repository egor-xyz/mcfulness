import { FC } from "react";
import styled from "styled-components";
import logo from 'assets/McHeart.png';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  img {
    width: 40%;
  }
`;

export const Home: FC = () => (
  <Wrapper>
    <img src={logo} alt="logo" />
  </Wrapper>
);