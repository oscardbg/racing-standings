import { createContext, useContext, useReducer } from "react";

import reducer from "./reducer";
import { driversData } from "./data/f1Data";
import { ridersData } from "./data/motoData";

const AppContext = createContext();

const initialState = {
  f1num: 0,
  motonum: 0,
  drivers: driversData,
  riders: ridersData,
  f1races: driversData[0].scores.length,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function allRaces(sport) {
    dispatch({ type: "ALL_RACES", payload: { sport } });
  }

  function nextRaceTotal(sport) {
    dispatch({ type: "NEXT_RACE", payload: { sport } });
  }

  function prevRaceTotal(sport) {
    dispatch({ type: "PREV_RACE", payload: { sport } });
  }

  function totalByRaces(raceNum, sport) {
    dispatch({ type: "TOTAL_BY_RACES", payload: { raceNum, sport } });
  }

  return (
    <AppContext.Provider value={{ ...state, allRaces, nextRaceTotal, prevRaceTotal, totalByRaces }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
