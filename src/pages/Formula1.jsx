import { useGlobalContext } from "../context";

import Standings from "../components/Standings";
import { f1locations } from "../data/f1Data";

const Formula1 = () => {
  const { f1num, drivers, allRaces, prevRaceTotal, nextRaceTotal } = useGlobalContext();

  return (
    <>
      <h2>Formula 1 2023 Standings</h2>
      <div className="btns">
        <button className="btn flt" onClick={() => allRaces("f1")}>
          All Races
        </button>
        <button className={`${f1num <= 0 ? "btn disabled" : "btn"}`} onClick={() => prevRaceTotal("f1")}>
          Previous Race
        </button>
        <button
          className={`${f1num < drivers[0].scores.length ? "btn" : "btn disabled"}`}
          onClick={() => nextRaceTotal("f1")}
        >
          Next Race
        </button>
      </div>
      <Standings num={f1num} people={drivers} locations={f1locations} type="f1" />
    </>
  );
};

export default Formula1;
