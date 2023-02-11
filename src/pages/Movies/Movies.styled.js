import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

export const SearchContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  height: 35px;
  justify-content: center;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Input = styled.input`
  display: inline-block;
  width: 300px;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding: 5px;
  border-radius: 4px
  background-color: grey;
`;

export const Button = styled.button`
  display: inline-block;
  width: 30px;
  height: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
`;

export const BtnIcon = styled(AiOutlineSearch)`
  width: 24px;
  height: 24px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: orangered;
  }
`;
