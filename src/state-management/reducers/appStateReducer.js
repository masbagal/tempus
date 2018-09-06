import { START_TASK, END_TASK, END_TIMER } from "../actions/appStateActions";

const defaultAppState = {
  timerActive: false,
  timerRunning: false
};

const appState = (state = defaultAppState, action) =>{
  switch (action.type) {
    case START_TASK:
      return {
        timerActive: true,
        timerRunning: true
      };
    case END_TIMER:
      return {
        timerActive: true,
        timerRunning: false
      };
    case END_TASK:
      return {
        timerActive: false,
        timerRunning: false,
      };
    default:
        return state;
  }
}

export default appState;