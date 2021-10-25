import Header from "./components/Header";
import data from "./api";
import "./App.css";

import { VictoryBar, VictoryChart, VictoryAxis } from "victory";

import "react-datepicker/dist/react-datepicker.css";

const Stats = () => {
  const countNumberOfMessages = (person) =>
    data.filter((message) => message.from === person).length;

  const chartData = () => {
    return [
      { person: "Magnus", meldinger: countNumberOfMessages("Magnus") },
      { person: "Tiril", meldinger: countNumberOfMessages("Tiril") },
      { person: "Peder", meldinger: countNumberOfMessages("Peder") },
      { person: "Ludvig", meldinger: countNumberOfMessages("Ludvig") },
    ];
  };

  return (
    <>
      <Header text="Statistikk" />
      <p>Antall meldinger:</p>
      <VictoryChart
        // domainPadding will add space to each side of VictoryBar to
        // prevent it from overlapping the axis
        domainPadding={20}
      >
        <VictoryAxis
        // tickValues specifies both the number of ticks and where
        // they are placed on the axis
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
        />
        <VictoryBar data={chartData()} x="person" y="meldinger" />
      </VictoryChart>
    </>
  );
};

export default Stats;
