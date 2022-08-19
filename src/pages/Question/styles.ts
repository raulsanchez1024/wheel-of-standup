import styled from "styled-components";
import { flexbox } from "../../styles/helpers/mixins";

export const Container = styled.div`
  ${flexbox({
    direction: "column",
    justifyContent: "center",
    alignItems: "center",
  })};
`;

export const FormContainer = styled.div`
  ${flexbox({
    direction: "column",
  })};
  width: 20rem;
`;
