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
    direction: "row",
    alignItems: "center",
    justifyContent: "center",
  })};
  width: 100%;

  input {
    height: 28px;
    width: 300px;
    border-radius: ${({ theme }) => theme.space(1)};
    border: 1px solid #696969;
    transition: all 0.2s ease-in-out;
  }

  input:hover {
    box-shadow: 0 0.25rem 0.75rem #a083ff;
  }
`;
