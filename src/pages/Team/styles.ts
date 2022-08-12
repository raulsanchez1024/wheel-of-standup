import styled from "styled-components";
import { flexbox } from "../../styles/helpers/mixins";

export const Container = styled.div`
  ${flexbox({
    direction: "column",
    justifyContent: "center",
    alignItems: "center",
  })};
`;

export const TeamList = styled.ul`
  list-style: none;
`;

export const TeamMember = styled.div`
  ${flexbox({ alignItems: "center" })};
  margin-bottom: ${({ theme }) => theme.space(2)};

  li {
    margin-right: ${({ theme }) => theme.space(1)};
  }
`;

export const Nav = styled.nav`
  ${flexbox({ justifyContent: "flex-end" })}
  margin: 0 32px;
`;
