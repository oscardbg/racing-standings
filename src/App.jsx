import { useGlobalContext } from "./context";

const App = () => {
  const { num, allRaces, nextRaceTotal, prevRaceTotal } = useGlobalContext();

  return (
    <>
      <div className="container">
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
        <h1>{num}</h1>
        <DriversList />
      </div>
    </>
  );
};

const DriversList = () => {
  const { num, races, drivers, totalByRaces } = useGlobalContext();

  return (
    <>
      <ul className="driver-list">
        <li>
          <h3>Names</h3>
          <div className="scores">
            <span>Total</span>
            {[...Array(races)].map((_, i) => (
              <span key={i} onClick={() => totalByRaces(i + 1)}>
                {i + 1}
              </span>
            ))}
          </div>
        </li>
        {drivers.map((driver) => (
          <li key={driver.id}>
            <h3>{driver.name}</h3>
            <div className="scores">
              <span>{driver.total}</span>
              {[...Array(num)].map((_, i) => (
                <span key={i}>{driver.scores[i]}</span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
