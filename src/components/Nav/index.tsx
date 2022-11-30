import { Link, useNavigate } from "react-router-dom";

import * as Styled from "./styles";

export const Nav = () => {
  const navigate = useNavigate();

  return (
    <Styled.Container>
      <ul>
        <Styled.Logo onClick={() => navigate("/")}>
          Wheel of Standup
        </Styled.Logo>
        <div>
          <Link to="/">Home</Link>
          <Link to="/team">Team</Link>
          <Link to="/question">Question</Link>
        </div>
      </ul>
    </Styled.Container>
  );
};
