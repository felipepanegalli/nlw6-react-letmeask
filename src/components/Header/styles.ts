import styled from "styled-components";

export const HeaderStyled = styled.header`
  padding: 24px;
  border-bottom: 1px solid #e2e2e2;
  background: ${props => props.theme.colors.lightGrey};
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    max-height: 45px;
  }

  .button-group {
    display: flex;
    gap: 16px;

    button {
      height: 40px;
    }
  }
`;

export const ReactSwitchStyle = styled.div`
  display: flex;
  align-self: center;
`;

export const moonIcon = {
    width: 20,
    marginLeft: 5,
}

export const sunIcon = {
    width: 20,
    marginLeft: 9,
}