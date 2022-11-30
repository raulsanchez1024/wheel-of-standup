import styled from "styled-components";
import { flexbox } from "../../styles/helpers/mixins";

export const Container = styled.nav`
  ${flexbox({ justifyContent: "flex-end" })}
  margin: 0 ${({ theme }) => theme.space(4)};

  ul {
    ${flexbox({ alignItems: "center", justifyContent: "space-between" })}
    width: 100%;
  }

  a {
    color: #100045;
    text-decoration: none;
    display: inline-block;
    padding: 15px 20px;
    position: relative;
    font-weight: 600;
  }

  a:hover {
    color: #5e2fff;
  }

  a:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #5e2fff;
    transition: width 0.5s ease 0s, left 0.5s ease 0s;
    width: 0;
  }

  a:hover:after {
    width: 100%;
    left: 0;
  }
`;

export const Logo = styled.h1`
  font-size: 24px;
  color: #100045;
  cursor: pointer;
`;
