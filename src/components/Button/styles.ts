import styled from "styled-components";

export const Button = styled.button`
  background-color: #5e2fff;
  color: #f7f9ff;
  border: none;
  padding: ${({ theme }) => theme.space(2)};
  font-weight: 600;
  font-size: ${({ theme }) => theme.space(3)};
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
`;
