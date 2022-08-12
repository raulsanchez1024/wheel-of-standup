import styled from "styled-components";

export const Button = styled.button`
  background-color: #5e2fff;
  color: #f7f9ff;
  border: none;
  padding: 16px;
  font-weight: 600;
  font-size: 24px;
  cursor: pointer;
  border-radius: 8px;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
