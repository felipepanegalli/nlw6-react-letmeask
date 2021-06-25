import styled from "styled-components";

export const RoomCodeStyled = styled.button`
  height: 40px;
  border-radius: 8px;
  overflow: hidden;
  background: transparent;
  border: 1px solid ${props => props.theme.colors.primary};
  cursor: pointer;
  display: flex;
  color: ${props => props.theme.colors.lightText};

  div {
    background: ${props => props.theme.colors.primary};
    padding: 9px 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 16px 0 12px;
    width: 230px;
    font-size: 14px;
    font-weight: 500;
  }
`;