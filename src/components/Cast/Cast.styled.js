import styled from 'styled-components';

export const ListCast = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export const ItemCast = styled.li`
  min-height: 150px;
  width: 150px;
  background-color: grey;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const ItemText = styled.div`
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 14px;
`;
