const totalUtil = (items) => {
  return items.reduce((acc, item) => acc + item, 0);
};

const mySort = (items) => {
  items.sort((a, b) => b.total - a.total);
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ALL_RACES": {
      const newList = state.drivers
        .map((driver) => {
          const newTotal = totalUtil(driver.scores);
          return { ...driver, total: newTotal };
        })
        .sort((a, b) => b.total - a.total);
      return { ...state, drivers: newList, num: newList[0].scores.length };
    }
    case "PREV_RACE": {
      if (state.num > 0) {
        const newList = state.drivers.map((driver) => {
          let newTotal = 0;
          for (let i = 0; i < state.num - 1; i++) {
            newTotal += driver.scores[i];
          }
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
          let newTotal = 0;
          for (let i = 0; i < state.num + 1; i++) {
            newTotal += driver.scores[i];
          }
          return { ...driver, total: newTotal };
        });
        mySort(newList);
        return { ...state, drivers: newList, num: state.num + 1 };
      }
      return state;
    }

    case "TOTAL_BY_RACES": {
      const newList = state.drivers.map((driver) => {
        let newTotal = 0;
        for (let i = 0; i < payload; i++) {
          newTotal += driver.scores[i];
        }
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
