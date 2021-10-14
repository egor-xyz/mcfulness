import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 20px;
  font-size: 0;
  padding: 0 60px 0 20px;
  > div {
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    width: 50%;
    height: 130px;
    /* border: 1px solid #000; */
  }
  svg {
    position: absolute;
    left: 0;
    transform: scale(.8);
    transform-origin: center center;
  }
`;