import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Back = styled(Link)`
  display: block;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  margin-bottom: 15px;
`;

export const Image = styled.img`
  width: 250px;
`;

export const SubTitle = styled.h3`
  margin-bottom: 10px;
`;

export const Text = styled.p`
  margin-bottom: 15px;
`;

export const ListDetails = styled.ul`
  padding-bottom: 30px;
  display: flex;
`;

export const ItemDetails = styled.li`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &:hover {
    color: white;
    background-color: orangered;
  }
`;

export const LinkDetail = styled(NavLink)``;
