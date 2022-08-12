import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { teamActions } from "../../features/team/slice";
import { Button } from "../../components/Button";

import * as Styled from "./styles";

export const Team = () => {
  const dispatch = useAppDispatch();
  const team = useAppSelector((state) => state.team);
  const [newTeamMember, setNewTeamMember] = useState("");

  return (
    <>
      <Styled.Nav>
        <ul>
          <Link to="/">Home</Link>
        </ul>
      </Styled.Nav>
      <Styled.Container>
        <h1>Team</h1>
        <Styled.TeamList>
          {team.map((member) => (
            <Styled.TeamMember>
              <li key={member.option}>{member.option}</li>
              <button
                onClick={() => dispatch(teamActions.removeTeamMember(member))}
              >
                Remove
              </button>
            </Styled.TeamMember>
          ))}
        </Styled.TeamList>
        <h2>Add Team Member</h2>
        <input
          type="text"
          value={newTeamMember}
          onChange={(e) => setNewTeamMember(e.target.value)}
        />
        <Button
          onClick={() =>
            dispatch(teamActions.addTeamMember({ option: newTeamMember }))
          }
        >
          Add
        </Button>
      </Styled.Container>
    </>
  );
};
