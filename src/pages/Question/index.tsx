import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { Button } from "../../components/Button";
import { Nav } from "../../components/Nav";
import { questionActions } from "../../features/question/slice";

import * as Styled from "./styles";

export const Question = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [question, setQuestion] = useState("");

  const onUpdateQuestion = () => {
    dispatch(questionActions.updateQuestion(question));
    navigate("/");
  };

  return (
    <>
      <Nav />
      <Styled.Container>
        <h1>Question</h1>
        <Styled.FormContainer>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <Button onClick={onUpdateQuestion}>Update Question</Button>
        </Styled.FormContainer>
      </Styled.Container>
    </>
  );
};
