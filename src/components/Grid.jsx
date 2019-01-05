import styled from 'styled-components';

export const Grid = styled.div`
  display: inline-grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  grid-template-rows: 50%;
  @media(max-width: 800px) {
    grid-template-columns: 50% 50%;
    grid-template-rows: 17%;
  }
  @media(max-width: 500px) {
    grid-template-columns: 100%;
    grid-template-rows: 17%;
  }
`;

export const Column = styled.div`
  padding: 10px;
  
`;
export const Grid1 = styled.div`
  display: inline-grid;
  grid-template-columns: 50% ;
  grid-template-rows: 30%;
  @media(max-width: 800px) {
    grid-template-columns: 50% 50%;
    grid-template-rows: 100%;
  }
  @media(max-width: 500px) {
    grid-template-columns: 86%;
    grid-template-rows: 100%;
  }
`;

