import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100vh;
  border-left: 1px solid ${(props) => props.theme.secondaryFont};
  background: ${(props) => props.theme.chatBg};

  

  @media screen and (min-width: 300px) and (max-width: 600px) {
    border-left: none;

    
  }
`;
