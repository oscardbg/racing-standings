import { useGlobalContext } from "../context";

const F1Drivers = () => {
  const { num, races, drivers, totalByRaces } = useGlobalContext();

  return (
    <>
      <ul className="driver-list">
        <li className="first-row">
          <p>Names</p>
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
