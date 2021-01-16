import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1100px) {
    flex: 1 1;
    flex-direction: column;
  }
`;
