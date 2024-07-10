
export const saveStateToLocalStorage = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('userState', serializedState);
    } catch (e) {
      console.error("Could not save state to localStorage", e);
    }
  };
  
  export const loadStateFromLocalStorage = () => {
    try {
      const serializedState = localStorage.getItem('userState');
      if (serializedState === null) {
        return undefined; // Let Redux initialize the state
      }
      return JSON.parse(serializedState);
    } catch (e) {
      console.error("Could not load state from localStorage", e);
      return undefined;
    }
  };
  