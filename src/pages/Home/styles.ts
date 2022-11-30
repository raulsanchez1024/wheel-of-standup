import styled, { css } from "styled-components";
import { Button } from "../../components/Button";
import { flexbox } from "../../styles/helpers/mixins";

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
    color: #100045;
  }

  a {
    margin: ${({ theme }) => theme.space(2)};
  }
`;

export const SpinButton = styled(Button)<{ $disabled: boolean }>`
  ${({ $disabled }) =>
    $disabled &&
    css`
      background-color: #000;
    `}
`;
