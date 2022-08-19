import { Link } from "react-router-dom";

import * as Styled from "./styles";

export const Nav = () => (
  <Styled.Container>
    <ul>
      <Link to="/">Home</Link>
      <Link to="/team">Team</Link>
      <Link to="/question">Question</Link>
    </ul>
  </Styled.Container>
);
