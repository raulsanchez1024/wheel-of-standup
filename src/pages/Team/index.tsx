import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { teamActions } from "../../features/team/slice";
import { Button } from "../../components/Button";
import { Nav } from "../../components/Nav";

import * as Styled from "./styles";

export const Team = () => {
  const dispatch = useAppDispatch();
  const team = useAppSelector((state) => state.team);
  const [newTeamMember, setNewTeamMember] = useState("");

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      dispatch(teamActions.addTeamMember({ option: newTeamMember }));
      setNewTeamMember("");
    }
  };

  return (
    <>
      <Nav />
      <Styled.Container>
        <Styled.PageTitle>Team</Styled.PageTitle>
        <Styled.TeamList>
          {team.map((member) => (
            <Styled.TeamMember>
              <Styled.TeamMemberName key={member.option}>
                {member.option}
              </Styled.TeamMemberName>
              <Button
                onClick={() => dispatch(teamActions.removeTeamMember(member))}
                size="small"
                type="delete"
              >
                Remove
              </Button>
            </Styled.TeamMember>
          ))}
        </Styled.TeamList>
        <h2>Add Team Member</h2>
        <Styled.FormContainer>
          <input
            type="text"
            value={newTeamMember}
            onChange={(e) => setNewTeamMember(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Button
            onClick={() => {
              dispatch(teamActions.addTeamMember({ option: newTeamMember }));
              setNewTeamMember("");
            }}
            size="small"
          >
            Add
          </Button>
        </Styled.FormContainer>
      </Styled.Container>
    </>
  );
};
