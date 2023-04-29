import styled from "styled-components";

export const Wrapper = styled.div`
  @media screen and (min-width: 300px) and (max-width: 600px) {
    width: 100vw;
    height: 100vh;
    overflow-y: hidden;
    overflow-x: hidden;

    position: relative;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr;
  grid-template-rows: 100vh;
  transition: 0.5s ease;

  @media screen and (min-width: 300px) and (max-width: 600px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 200vw;
    height: 100%;
    grid-template-columns: 50% 50%;
    grid-template-rows: 90vh 10vh;
    overflow-y: hidden;
    transform: ${(props) => props.translateX};

    
  }
`;

export const SideBarWrapper = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;

  @media screen and (min-width: 300px) and (max-width: 600px) {
    grid-column: 1/2;
    grid-row: 2/3;
  }
`;

export const OutletWrapper = styled.div`
  grid-column: 2/3;
  grid-row: 1/2;

  @media screen and (min-width: 300px) and (max-width: 600px) {
    grid-column: 1/2;
    grid-row: 1/2;
    overflow-x: hidden;
  }
`;

export const ChatViewWrapper = styled.div`
  grid-column: 3/4;
  grid-row: 1/2;

  @media screen and (min-width: 300px) and (max-width: 600px) {
    grid-column: 2/3;
    grid-row: 1/3;
    overflow-x: hidden;
  }
`;
