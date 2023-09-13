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
  const { type, payload } = action;

  switch (type) {
    // Get the total of all races
    case "ALL_RACES": {
      const newList = state.drivers
        .map((driver) => {
          const newTotal = sumValues(driver.scores, driver.scores.length);
          return { ...driver, total: newTotal };
        })
        .sort((a, b) => b.total - a.total);
      return { ...state, drivers: newList, num: newList[0].scores.length };
    }

    // Get the total until the previous race chosen
    case "PREV_RACE": {
      if (state.num > 0) {
        const newList = state.drivers.map((driver) => {
          let newTotal = sumValues(driver.scores, state.num - 1);
          return { ...driver, total: newTotal };
        });
        if (newList[0].total === 0) {
          sortByName(newList);
        } else {
          mySort(newList);
        }
        return { ...state, drivers: newList, num: state.num - 1 };
      }
      return state;
    }

    // Get the total until the next race chosen
    case "NEXT_RACE": {
      if (state.num < state.drivers[0].scores.length) {
        const newList = state.drivers.map((driver) => {
          let newTotal = sumValues(driver.scores, state.num + 1);
          return { ...driver, total: newTotal };
        });
        mySort(newList);
        return { ...state, drivers: newList, num: state.num + 1 };
      }
      return state;
    }

    // Get the total until a specif race chosen
    case "TOTAL_BY_RACES": {
      // Validate if payload is less or equal the current number of races
      if (payload <= state.drivers[0].scores.length) {
        const newList = state.drivers.map((driver) => {
          let newTotal = sumValues(driver.scores, payload);
          return { ...driver, total: newTotal };
        });
        mySort(newList);
        return { ...state, drivers: newList, num: payload };
      }
      return state;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
