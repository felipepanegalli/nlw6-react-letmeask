import styled from "styled-components";

export const ButtonStyled = styled.button`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: ${props => props.theme.colors.primary};
  color: #FFF;
  padding: 0 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;
  transition: filter .2s;

  img {
    margin-right: 8px;
  }

  &.outlined {
    background: transparent;
    border: 1px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.lightText};
  }

  &:not(:disabled):hover {
    filter: brightness(.9);
  }

  &:disabled {
    opacity: .6;
    cursor: not-allowed;
  }
`;