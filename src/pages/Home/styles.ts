import styled from "styled-components";
import { flexbox } from "../../styles/helpers/mixins";

export const PageTitle = styled.h1`
  font-family: "Monoton", cursive;
  background-image: linear-gradient(
    to left,
    violet,
    indigo,
    blue,
    green,
    yellow,
    orange,
    red
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Container = styled.div`
  ${flexbox({
    direction: "column",
    justifyContent: "center",
    alignItems: "center",
  })};
`;

export const QuestionOfTheDay = styled.div`
  ${flexbox({
    direction: "column",
    justifyContent: "center",
    alignItems: "center",
  })};

  h3 {
    margin-bottom: 0;
  }

  a {
    margin: ${({ theme }) => theme.space(2)};
  }
`;
