import styled from 'styled-components';

export const Grid = styled.div`
  display: -ms-inline-grid;
  display: inline-grid;
  -ms-grid-template-columns: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  -ms-grid-template-rows: 1fr;
  grid-template-rows: 1fr;
  width: 100%;
  @media(max-width: 800px) {
    -ms-grid-template-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    -ms-grid-template-rows: 1fr;
    grid-template-rows: 1fr;
  }
  @media(max-width: 500px) {
    -ms-grid-template-columns: 1fr;
    grid-template-columns: 1fr;
    -ms-grid-gap: 20px;
    grid-gap: 20px;
    -ms-grid-template-rows: 1fr;
    grid-template-rows: 1fr;
  }
`;

export const Column = styled.div`
  padding: 10px;
  
`;
export const Grid1 = styled.div`
  display: -ms-inline-grid;
  display: inline-grid;
  -ms-grid-template-columns: 60% ;
  grid-template-columns: 60% ;
  width: 100%;
  -ms-grid-template-rows: 1fr;
  grid-template-rows: 1fr;
  @media(max-width: 800px) {
    -ms-grid-template-columns: 1fr;
    grid-template-columns: 1fr;
    -ms-grid-template-rows: 1fr%;
    grid-template-rows: 1fr%;
  }
  @media(max-width: 500px) {
    -ms-grid-template-columns: 1fr;
    grid-template-columns: 1fr;
    -ms-grid-template-rows: 1fr;
    grid-template-rows: 1fr;
  }
`;

export const Grid2 = styled.div`
  display: -ms-inline-grid;
  display: inline-grid;
  -ms-grid-template-columns: 1fr 1fr ;
  grid-template-columns: 1fr 1fr ;
  width: 100%;
  -ms-grid-template-rows: 1fr;
  grid-template-rows: 1fr;
  @media(max-width: 800px) {
    -ms-grid-template-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    -ms-grid-template-rows: 1fr;
    grid-template-rows: 1fr;
  }
  @media(max-width: 500px) {
    -ms-grid-template-columns: 1fr;
    grid-template-columns: 1fr;
    -ms-grid-template-rows: 1fr;
    grid-template-rows: 1fr;
  }
`;

export const Grid3 = styled.div`
  display: -ms-inline-grid;
  display: inline-grid;
  -ms-grid-template-columns: 60% ;
  grid-template-columns: 60% ;
  width: 100%;
  -ms-grid-template-rows: 1fr;
  grid-template-rows: 1fr;
  @media(max-width: 800px) {
    -ms-grid-template-columns: 1fr;
    grid-template-columns: 1fr;
    -ms-grid-template-rows: 1fr;
    grid-template-rows: 1fr;
  }
  @media(max-width: 500px) {
    -ms-grid-template-columns: 1fr;
    grid-template-columns: 1fr;
    -ms-grid-template-rows: 1fr;
    grid-template-rows: 1fr;
  }
`;

export const Grid5 = styled.div`
  display: -ms-inline-grid;
  display: inline-grid;
  width: 100%;
  -ms-grid-template-columns: 1fr ;
  grid-template-columns: 1fr ;
  -ms-grid-template-rows: 1fr;
  grid-template-rows: 1fr;
`;

export const Grid4 = styled.div`
  display: -ms-inline-grid;
  display: inline-grid;
  -ms-grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
  -ms-grid-template-rows: 1fr;
  grid-template-rows: 1fr;
  @media(max-width: 800px) {
    -ms-grid-template-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    -ms-grid-template-rows: 1fr;
    grid-template-rows: 1fr;
  }
  @media(max-width: 500px) {
    grid-template-columns: 100%;
    grid-template-rows: 25%;
  }
`;

export const Grid6 = styled.div`
  display: -ms-inline-grid;
  display: inline-grid;
  width: 100%;
  -ms-grid-template-columns: 4fr 1fr ;
  grid-template-columns: 4fr 1fr ;
  -ms-grid-template-rows: 1fr;
  grid-template-rows: 1fr;
  @media(max-width: 800px) {
    -ms-grid-template-columns: 3fr 1fr;
    grid-template-columns: 3fr 1fr;
    -ms-grid-template-rows: 1fr;
    -ms-grid-template-rows: 1fr;
    grid-template-rows: 1fr;
  }
  @media(max-width: 500px) {
    -ms-grid-template-columns: 1fr;
    grid-template-columns: 1fr;
    -ms-grid-template-rows: 1fr;
    grid-template-rows: 1fr;
  }
`;

export const Grid7 = styled.div`
  display: -ms-inline-grid;
  display: inline-grid;
  -ms-grid-template-columns: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  -ms-grid-template-rows: 1fr;
  grid-template-rows: 1fr;
  width: 100%;
  @media(max-width: 800px) {
    -ms-grid-template-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    -ms-grid-template-rows: 1fr;
    grid-template-rows: 1fr;
  }
  @media(max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;

export const Grid8 = styled.div`
  display: -ms-inline-grid;
  display: inline-grid;
  -ms-grid-template-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  -ms-grid-template-rows: 1fr;
  grid-template-rows: 1fr;
  @media(max-width: 800px) {
    -ms-grid-template-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    -ms-grid-template-rows: 1fr;
    grid-template-rows: 1fr;
  }
  @media(max-width: 500px) {
    -ms-grid-template-columns: 1fr;
    grid-template-columns: 1fr;
    -ms-grid-template-rows: 1fr;
    grid-template-rows: 1fr;
  }
  `;

  export const Grid9 = styled.div`
  display: -ms-inline-grid;
  display: inline-grid;
  width: 100%;
  -ms-grid-template-columns: 1fr 1fr ;
  grid-template-columns: 1fr 1fr ;
  -ms-grid-template-rows: 1fr;
  grid-template-rows: 1fr;
  @media(max-width: 800px) {
    -ms-grid-template-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    -ms-grid-template-rows: 1fr;
    grid-template-rows: 1fr;
  }
  @media(max-width: 500px) {
    -ms-grid-template-columns: 1fr;
    grid-template-columns: 1fr;
    -ms-grid-template-rows: 1fr;
    grid-template-rows: 1fr;
  }
`;