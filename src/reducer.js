const mySort = (items) => {
  items.sort((a, b) => b.total - a.total);
};

const sumValues = (elems, max) => {
  let newTotal = 0;
  for (let i = 0; i < max; i++) {
    newTotal += elems[i];
  }
  return newTotal;
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ALL_RACES": {
      const newList = state.drivers
        .map((driver) => {
          const newTotal = sumValues(driver.scores, driver.scores.length);
          return { ...driver, total: newTotal };
        })
        .sort((a, b) => b.total - a.total);
      return { ...state, drivers: newList, num: newList[0].scores.length };
    }
    case "PREV_RACE": {
      if (state.num > 0) {
        const newList = state.drivers.map((driver) => {
          let newTotal = sumValues(driver.scores, state.num - 1);
          return { ...driver, total: newTotal };
        });
        mySort(newList);
        return { ...state, drivers: newList, num: state.num - 1 };
      }
      return state;
    }
    case "NEXT_RACE": {
      if (state.num < 10) {
        const newList = state.drivers.map((driver) => {
          let newTotal = sumValues(driver.scores, state.num + 1);
          return { ...driver, total: newTotal };
        });
        mySort(newList);
        return { ...state, drivers: newList, num: state.num + 1 };
      }
      return state;
    }

    case "TOTAL_BY_RACES": {
      // Validate if payload is less or equal the current number of races
      // if will go here

      const newList = state.drivers.map((driver) => {
        let newTotal = sumValues(driver.scores, payload);
        return { ...driver, total: newTotal };
      });
      mySort(newList);
      return { ...state, drivers: newList, num: payload };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
