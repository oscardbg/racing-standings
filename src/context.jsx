import { createContext, useContext, useReducer } from "react";

import reducer from "./reducer";
import { testDrivers } from "./data/f1Data";

const AppContext = createContext();

const initialState = { num: 0, drivers: testDrivers, races: testDrivers[0].scores.length };

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function allRaces() {
    dispatch({ type: "ALL_RACES" });
  }

  function nextRaceTotal() {
    dispatch({ type: "NEXT_RACE" });
  }

  function prevRaceTotal() {
    dispatch({ type: "PREV_RACE" });
  }

  function totalByRaces(raceNum) {
    dispatch({ type: "TOTAL_BY_RACES", payload: raceNum });
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
