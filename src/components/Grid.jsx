import styled from 'styled-components';

export const Grid = styled.div`
  display: inline-grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  grid-template-rows: 33%;
  width: 100%;
  @media(max-width: 800px) {
    grid-template-columns: 50% 50%;
    grid-template-rows: 25%;
  }
  @media(max-width: 500px) {
    grid-template-columns: 100%;
    grid-template-rows: 8%;
  }
`;

export const Column = styled.div`
  padding: 10px;
  
`;
export const Grid1 = styled.div`
  display: inline-grid;
  grid-template-columns: 60% ;
  grid-template-rows: 46%;
  @media(max-width: 800px) {
    grid-template-columns: 100%;
    grid-template-rows: 50%;
  }
  @media(max-width: 500px) {
    grid-template-columns: 100%;
    grid-template-rows: 50%;
  }
`;

export const Grid2 = styled.div`
  display: inline-grid;
  grid-template-columns: 50% 50% ;
  grid-template-rows: 30%;
  @media(max-width: 800px) {
    grid-template-columns: 50% 50%;
    grid-template-rows: 55%;
  }
  @media(max-width: 500px) {
    grid-template-columns: 96%;
    grid-template-rows: 65%;
  }
`;

export const Grid3 = styled.div`
display: inline-grid;
grid-template-columns: 60% ;
grid-template-rows: 50%;
@media(max-width: 800px) {
  grid-template-columns: 100%;
  grid-template-rows: 50%;
}
@media(max-width: 500px) {
  grid-template-columns: 100%;
  grid-template-rows: 50%;
}
`;

export const Grid5 = styled.div`
display: inline-grid;
grid-template-columns: 100% ;
grid-template-rows: 100%;
`;

export const Grid4 = styled.div`
  display: inline-grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 33%;
  @media(max-width: 800px) {
    grid-template-columns: 50% 50%;
    grid-template-rows: 50%;
  }
  @media(max-width: 500px) {
    grid-template-columns: 100%;
    grid-template-rows: 25%;
  }
`;

export const Grid6 = styled.div`
  display: inline-grid;
  grid-template-columns: 70% 70% ;
  grid-template-rows: 30%;
  @media(max-width: 800px) {
    grid-template-columns: 50% 50%;
    grid-template-rows: 55%;
  }
  @media(max-width: 500px) {
    grid-template-columns: 96%;
    grid-template-rows: 55%;
  }
`;