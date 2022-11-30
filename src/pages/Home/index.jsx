import { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { Button } from "../../components/Button";
import { Nav } from "../../components/Nav";

import * as Styled from "./styles";

export const Home = () => {
  const team = useAppSelector((state) => state.team);
  const question = useAppSelector((state) => state.question);
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(null);
  const [stopped, setStopped] = useState(false);
  const [data, setData] = useState(team);
  const winner = data[prizeNumber]?.option;

  const handleSpinClick = () => {
    const newData = data.filter((item) => item.option !== winner);
    setData(newData);
    const newPrizeNumber = Math.floor(Math.random() * newData.length);
    setStopped(false);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  return (
    <>
      <Nav />
      <Styled.Container>
        <Styled.QuestionOfTheDay>
          <h3>Question of the day</h3>
          {question ? (
            <p>{question}</p>
          ) : (
            <Link to="/question">Add question</Link>
          )}
        </Styled.QuestionOfTheDay>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          onStopSpinning={() => {
            setMustSpin(false);
            setStopped(true);
          }}
          outerBorderWidth={[0]}
          innerBorderColor={["#f2f2f2"]}
          radiusLineColor={["tranparent"]}
          radiusLineWidth={[1]}
          textColors={[
            "#f5f5f5",
            "#f5f5f5",
            "#f5f5f5",
            "#f5f5f5",
            "#f5f5f5",
            "#000",
          ]}
          textDistance={55}
          fontSize={[15]}
          backgroundColors={[
            "#3f297e",
            "#175fa9",
            "#169ed8",
            "#239b63",
            "#64b031",
            "#efe61f",
            "#f7a416",
            "#e6471d",
            "#dc0936",
            "#e5177b",
            "#be1180",
            "#871f7f",
          ]}
          spinDuration={0.2}
        />
        <Button onClick={handleSpinClick} disabled={!stopped && prizeNumber}>
          {stopped || !prizeNumber ? "Spin" : "Spinning..."}
        </Button>
      </Styled.Container>
    </>
  );
};
