import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { getRandomHexColor } from '../../utils/getColorsFn';

export const Container = styled.div`
  border: 1px solid rgb(176 176 176);
  padding: 30px;
  max-width: 600px;
  min-height: calc(100vh - 70px);
  margin: 0 auto;

  box-shadow: 0 0 10px 2px #787878bf;
  border-radius: 5px;

  h2 {
    margin-top: 40px;
    &::first-letter {
      color: ${getRandomHexColor()};
    }
  }
`;

export const Header = styled.header`
  padding-bottom: 20px;
  max-width: 600px;
  margin: 0 auto;
  border-bottom: 1px solid #787878;
  display: flex;
  gap: 25px;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 25px;
  }
`;

export const Title = styled.h1`
  margin-top: 15px;
  font-size: 45px;
  text-align: center;
  &::first-letter {
    color: ${getRandomHexColor()};
  }
`;

export const Nav = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 25px;

  &.active {
    color: ${getRandomHexColor()};
  }
`;
