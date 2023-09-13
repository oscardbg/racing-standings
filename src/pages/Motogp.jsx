import { useGlobalContext } from "../context";

import Standings from "../components/Standings";

import { motoLocations } from "../data/motoData";

const Motogp = () => {
  const { riders } = useGlobalContext();

  return (
    <>
      <h2>Moto GP 2023 Standings</h2>
      <Standings people={riders} locations={motoLocations} />
    </>
  );
};

export default Motogp;
