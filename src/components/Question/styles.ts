import styled from "styled-components";

export const QuestionStyled = styled.div`
    // background: ${props => props.theme.colors.lightGrey};
  background: #fefefe;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, .04);
  padding: 24px;

  & + .question {
    margin-top: 8px;
  }

  &.highlighted {
    background: #f4f0ff;
    border: 1px solid ${props => props.theme.colors.primary};

    footer .user-info span {
      color: #29292e;
    }
  }

  &.answered {
    background: #DBDBDB;
  }


  p {
    color: #29292e;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;

    .user-info {
      display: flex;
      align-items: center;

      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }

      span {
        margin-left: 8px;
        color: #737380;
        font-size: 14px;
      }
    }

    > div {
      display: flex;
      gap: 8px;
    }

    button {
      border: 0;
      background: transparent;
      cursor: pointer;

      &.like-button {
        display: flex;
        align-items: flex-end;
        color: #737380;
        gap: 8px;
        transition: filter .2s;

        &.liked {
          color: ${props => props.theme.colors.primary};

          svg path {
            //fill: #835afd;
            stroke: ${props => props.theme.colors.primary};
          }
        }
      }

      &:hover {
        filter: brightness(.6);
      }
    }
  }
`;
