import { useState } from "react";
import { Wheel } from "react-custom-roulette";

import * as Styled from "./styles";

export const Home = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(null);
  const [stopped, setStopped] = useState(false);
  const [data, setData] = useState([
    { option: "Raul" },
    { option: "Dan" },
    { option: "Nate" },
    { option: "Lily" },
    { option: "Cindy" },
    { option: "Karen" },
    { option: "Renee" },
    { option: "Neeraj" },
    { option: "Jeremy" },
    { option: "Rosse" },
    { option: "Matt" },
    { option: "Anita" },
  ]);
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
          // backgroundColors={["#A8A8F8", "#b0e0e6", "#bada55", "#ffb3ba"]}
          spinDuration={0.2}
        />
        {stopped && <h1>Up next: {data[prizeNumber]?.option}</h1>}
        <Styled.Button onClick={handleSpinClick}>SPIN</Styled.Button>
      </Styled.Container>
    </>
  );
};
