import styled, { css } from "styled-components";
import { flexbox } from "../../styles/helpers/mixins";

export const Button = styled.button<{
  disabled?: boolean;
  $size: "small" | "medium" | "large";
  $type: "default" | "delete";
}>`
  background-color: #5e2fff;
  color: #f7f9ff;
  border: none;
  padding: ${({ theme }) => theme.space(2)};
  font-weight: 600;
  font-size: ${({ theme }) => theme.space(2)};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.space(1)};
  transition: all 0.2s ease-in-out;
  margin: 16px;

  &:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }

  &:hover {
    box-shadow: 0 0.25rem 0.75rem #a083ff;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #c7c7c7;
      cursor: default;
      color: #949494;
      pointer-events: none;
    `}

  ${({ $size }) =>
    $size === "small" &&
    css`
      height: 30px;
      ${flexbox({ alignItems: "center" })}
      font-size: 14px;
    `}

  ${({ $type }) =>
    $type === "delete" &&
    css`
      background-color: red;

      &:hover {
        box-shadow: 0 0.25rem 0.75rem #ff5c5c;
      }
    `}
`;
