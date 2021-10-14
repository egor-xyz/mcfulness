import styled from 'styled-components';

import { Logo } from 'assets';

export const Wrapper = styled.div`
max-width: 375px;
margin: 0 auto;
height: 100vh;
`;

export const StyledLogo = styled(Logo)`
  margin-top: 20px;
`;

export const Title = styled.div`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 40px;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  color: #000000;
`;