import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px 8px;
`;

export const Item = styled.li`
  flex-basis: calc((100% - 32px) / 4);
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const LinkStyled = styled(NavLink)`
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.1);
    color: orangered;
  }
`;

export const MoviesName = styled.h3`
  padding: 12px 4px;
  font-size: 16px;
`;

export const Img = styled.img`
  object-fit: cover;
  height: 300px;
`;
