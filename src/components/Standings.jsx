import { useGlobalContext } from "../context";

const Standings = ({ people, locations }) => {
  const { motonum } = useGlobalContext();

  return (
    <>
      <ul className="driver-list">
        <li className="first-row">
          <p>Names</p>
          <div className="scores">
            <span>Total</span>
            {locations.map((loc, i) => (
              <span key={loc.id} onClick={() => totalByRaces(i + 1)} title={loc.race + "\n" + loc.date}>
                {loc.flag}
              </span>
            ))}
          </div>
        </li>
        {people.map((person) => (
          <li key={person.id}>
            <p>{person.name}</p>
            <div className="scores">
              <span>{person.total}</span>
              {[...Array(motonum)].map((_, i) => (
                <span key={i}>{person.scores[i]}</span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Standings;
