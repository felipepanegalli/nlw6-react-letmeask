import styled from "styled-components";

export const PageAuth = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const AsideStyled = styled.aside`
  flex: 7;
  background: ${props => props.theme.title === 'dark' ? props.theme.colors.lightGrey : '#835afd'};
  color: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 120px 80px;

  img {
    max-width: 320px;
  }

  strong {
    font: 700 36px 'Poppins', sans-serif;
    line-height: 42px;
    margin-top: 16px;
  }

  p {
    font-size: 24px;
    line-height: 32px;
    margin-top: 16px;
    color: #f8f8f8;
  }
`;

export const MainStyled = styled.main`
  flex: 8;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 32px;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  align-items: stretch;
  text-align: center;

  > img {
    align-self: center;
    width: 210px;
  }

  h2 {
    font-size: 24px;
    margin: 64px 0 24px;
    font-family: 'Poppins', sans-serif;
  }

  p {
    font-size: 14px;
    color: #737380;
    margin-top: 16px;

    a {
      color: ${props => props.theme.colors.secundary};
    }
  }

  form {
    input {
      height: 50px;
      border-radius: 8px;
      padding: 0 16px;
      background: #FFF;
      border: 1px solid #a8a8b3;
      width: 100%;
    }

    button {
      margin-top: 16px;
      width: 100%;
    }
  }

  .create-room {
    margin-top: 64px;
    height: 50px;
    border-radius: 8px;
    font-weight: 500;
    background: #ea4335;
    color: #FFF;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    border: 0;
    transition: filter .2s;

    img {
      margin-right: 8px;
    }

    &:hover {
      filter: brightness(.9);
    }
  }
`;

export const Separator = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colors.white};
  margin: 32px 0;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    flex: 1;
    height: 1px;
    background: ${props => props.theme.colors.white};
    margin-right: 16px;
  }

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${props => props.theme.colors.white};
    margin-left: 16px;
  }
`;
