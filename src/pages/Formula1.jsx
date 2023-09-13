import { useGlobalContext } from "../context";

import F1Drivers from "../components/F1Drivers";

const Formula1 = () => {
  const { num, drivers, allRaces, prevRaceTotal, nextRaceTotal } = useGlobalContext();

  return (
    <>
      <h2>Formula 1 2023 Standings</h2>
      <div className="btns">
        <button className="btn flt" onClick={allRaces}>
          All Races
        </button>
        <button className={`${num <= 0 ? "btn disabled" : "btn"}`} onClick={prevRaceTotal}>
          Previous Race
        </button>
        <button
          className={`${num < drivers[0].scores.length ? "btn" : "btn disabled"}`}
          onClick={nextRaceTotal}
        >
          Next Race
        </button>
      </div>
      <F1Drivers />
    </>
  );
};

export default Formula1;
