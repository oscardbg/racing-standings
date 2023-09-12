import { useGlobalContext } from "../context";

import { locations } from "../data/f1Data";

const F1Drivers = () => {
  const { num, races, drivers, totalByRaces } = useGlobalContext();

  return (
    <>
      <ul className="driver-list">
        <li className="first-row">
          <p>Names</p>
          <div className="scores">
            <span>Total</span>
            {locations.map((loc, i) => (
              <span key={loc.id} onClick={() => totalByRaces(i + 1)}>
                {loc.flag}
              </span>
            ))}
          </div>
        </li>
        {drivers.map((driver) => (
          <li key={driver.id}>
            <p>{driver.name}</p>
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

export default F1Drivers;
