import createStore from "redux-zero";

const initialState = { 
  isTimerActive: false 
};

const store = createStore(initialState);

export default store;

function appState(state, action) {
  
}