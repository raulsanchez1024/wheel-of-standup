import { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { Button } from "../../components/Button";

import * as Styled from "./styles";

export const Home = () => {
  const team = useAppSelector((state) => state.team);
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(null);
  const [stopped, setStopped] = useState(false);
  const [data, setData] = useState(team);
  const winner = data[prizeNumber]?.option;

  const removeWinner = () => {
    const newData = data.filter((item) => item.option !== winner);
    setData(newData);
  };

  const handleSpinClick = () => {
    removeWinner();
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setStopped(false);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  return (
    <>
      <Styled.Nav>
        <ul>
          <Link to="/team">Team</Link>
        </ul>
      </Styled.Nav>
      <Styled.Container>
        <Styled.PageTitle>Wheel Of Standup</Styled.PageTitle>
        <h3>Question of the day:</h3>
        <p>Are you a morning person or a night owl?</p>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          textColors={["#fff", "#fff", "#fff", "#fff", "#000", "#fff"]}
          onStopSpinning={() => {
            setMustSpin(false);
            setStopped(true);
          }}
          backgroundColors={[
            "red",
            "green",
            "purple",
            "orange",
            "yellow",
            "blue",
          ]}
          spinDuration={0.2}
        />
        {stopped && <h1>Up next: {data[prizeNumber]?.option}</h1>}
        <Button onClick={handleSpinClick}>SPIN</Button>
      </Styled.Container>
    </>
  );
};
