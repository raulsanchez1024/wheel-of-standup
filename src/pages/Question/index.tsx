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

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      onUpdateQuestion();
    }
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
            onKeyDown={handleKeyDown}
          />
          <Button onClick={onUpdateQuestion} size="small">
            Update Question
          </Button>
        </Styled.FormContainer>
      </Styled.Container>
    </>
  );
};
