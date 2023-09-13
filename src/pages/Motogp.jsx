import { useGlobalContext } from "../context";

import Standings from "../components/Standings";

import { motoLocations } from "../data/motoData";

const Motogp = () => {
  const { motonum, riders, allRaces, prevRaceTotal, nextRaceTotal } = useGlobalContext();

  return (
    <>
      <h2>Moto GP 2023 Standings</h2>
      <div className="btns">
        <button className="btn flt" onClick={() => allRaces("moto")}>
          All Races
        </button>
        <button className={`${motonum <= 0 ? "btn disabled" : "btn"}`} onClick={() => prevRaceTotal("moto")}>
          Previous Race
        </button>
        <button
          className={`${motonum < riders[0].scores.length ? "btn" : "btn disabled"}`}
          onClick={() => nextRaceTotal("moto")}
        >
          Next Race
        </button>
      </div>
      <Standings num={motonum} people={riders} locations={motoLocations} type="motogp" />
    </>
  );
};

export default Motogp;
