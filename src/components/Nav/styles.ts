import styled from "styled-components";
import { flexbox } from "../../styles/helpers/mixins";

export const Container = styled.nav`
  ${flexbox({ justifyContent: "flex-end" })}
  margin: 0 ${({ theme }) => theme.space(4)};

  a {
    margin: ${({ theme }) => theme.space()};
  }
`;
