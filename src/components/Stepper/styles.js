import styled from "styled-components";

export const StyleWrapperSteppers = styled.div`
  align-items: center;
  display: flex;
  margin: auto 10vw;
  padding: 2rem;

  @media (max-width: 800px) {
    margin: auto 1vw;
  }
`;

export const StyleIconContainer = styled.span`
  align-items: center;
  background-color: ${props => props.color};
  border-radius: 100%;
  color: #FFFFFF;
  display: flex;
  height: 1.5rem;
  justify-content: center;
  width: 1.5rem;
`;

export const StyleIconCheck = styled.img`
  width: 1rem;
`;

export const StyleLabel = styled.label`
  font-family: sans-serif;
  font-size: 1rem;
  padding-left: 0.5rem;
`;

export const StyleStepConnector = styled.span`
  border: 1px solid gray;
  flex-grow: 1;
  margin: 0.5rem;
`;
