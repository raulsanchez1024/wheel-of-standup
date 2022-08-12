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

export const Nav = styled.nav`
  ${flexbox({ justifyContent: "flex-end" })}
  margin: 0 32px;
`;
