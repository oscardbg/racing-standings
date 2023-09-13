// Used to order the drivers array by total score
const mySort = (items) => {
  items.sort((a, b) => b.total - a.total);
};

// Sort by name in array of objects
const sortByName = (items) => {
  items.sort((a, b) => {
    let fa = a.name.toLowerCase();
    let fb = b.name.toLowerCase();

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });
};

// Used to sum the scores of the drivers
const sumValues = (elems, max) => {
  let newTotal = 0;
  for (let i = 0; i < max; i++) {
    newTotal += elems[i];
  }
  return newTotal;
};

// Main reducer function
const reducer = (state, action) => {
  const {
    type,
    payload: { raceNum, sport },
  } = action;

  switch (type) {
    // Get the total of all races
    case "ALL_RACES": {
      // Formula 1 operation
      if (sport === "f1") {
        const newList = state.drivers
          .map((driver) => {
            const newTotal = sumValues(driver.scores, driver.scores.length);
            return { ...driver, total: newTotal };
          })
          .sort((a, b) => b.total - a.total);
        return { ...state, drivers: newList, f1num: newList[0].scores.length };
      }
      // MotoGP operation
      else {
        const newList = state.riders
          .map((rider) => {
            const newTotal = sumValues(rider.scores, rider.scores.length);
            return { ...rider, total: newTotal };
          })
          .sort((a, b) => b.total - a.total);
        return { ...state, riders: newList, motonum: newList[0].scores.length };
      }
    }

    // Get the total until the previous race chosen
    case "PREV_RACE": {
      if (sport === "f1") {
        if (state.f1num > 0) {
          const newList = state.drivers.map((driver) => {
            let newTotal = sumValues(driver.scores, state.f1num - 1);
            return { ...driver, total: newTotal };
          });
          if (newList[0].total === 0) {
            sortByName(newList);
          } else {
            mySort(newList);
          }
          return { ...state, drivers: newList, f1num: state.f1num - 1 };
        }
      } else {
        if (state.motonum > 0) {
          const newList = state.riders.map((rider) => {
            let newTotal = sumValues(rider.scores, state.motonum - 1);
            return { ...rider, total: newTotal };
          });
          if (newList[0].total === 0) {
            sortByName(newList);
          } else {
            mySort(newList);
          }
          return { ...state, riders: newList, motonum: state.motonum - 1 };
        }
      }
      return state;
    }

    // Get the total until the next race chosen
    case "NEXT_RACE": {
      if (sport === "f1") {
        if (state.f1num < state.drivers[0].scores.length) {
          const newList = state.drivers.map((driver) => {
            let newTotal = sumValues(driver.scores, state.f1num + 1);
            return { ...driver, total: newTotal };
          });
          mySort(newList);
          return { ...state, drivers: newList, f1num: state.f1num + 1 };
        }
      } else {
        if (state.motonum < state.riders[0].scores.length) {
          const newList = state.riders.map((rider) => {
            let newTotal = sumValues(rider.scores, state.motonum + 1);
            return { ...rider, total: newTotal };
          });
          mySort(newList);
          return { ...state, riders: newList, motonum: state.motonum + 1 };
        }
      }
      return state;
    }

    // Get the total until a specif race chosen
    case "TOTAL_BY_RACES": {
      // Validate if payload is less or equal the current number of races
      if (sport === "f1") {
        if (raceNum <= state.drivers[0].scores.length) {
          const newList = state.drivers.map((driver) => {
            let newTotal = sumValues(driver.scores, raceNum);
            return { ...driver, total: newTotal };
          });
          mySort(newList);
          return { ...state, drivers: newList, f1num: raceNum };
        }
      } else {
        if (raceNum <= state.riders[0].scores.length) {
          const newList = state.riders.map((rider) => {
            let newTotal = sumValues(rider.scores, raceNum);
            return { ...rider, total: newTotal };
          });
          mySort(newList);
          return { ...state, riders: newList, motonum: raceNum };
        }
      }
      return state;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
