import { useGlobalContext } from "../context";

import F1Drivers from "../components/F1Drivers";

const Formula1 = () => {
  const { allRaces, prevRaceTotal, nextRaceTotal } = useGlobalContext();

  return (
    <>
      <div className="btns">
        <button className="btn flt" onClick={allRaces}>
          All Races
        </button>
        <button className="btn flt" onClick={prevRaceTotal}>
          Previous Race
        </button>
        <button className="btn flt" onClick={nextRaceTotal}>
          Next Race
        </button>
      </div>
      <F1Drivers />
    </>
  );
};

export default Formula1;
