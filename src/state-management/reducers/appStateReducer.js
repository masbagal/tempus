import { START_TASK, END_TASK, END_TIMER } from "../actions/appStateActions";

const defaultAppState = {
  timerActive: false,
  timerRunning: false
};

const appState = (state = defaultAppState, action) =>{
  switch (action.type) {
    case START_TASK:
      return {
        ...state,
        timerActive: true,
        timerRunning: true,
        startTime: action.startTime,
      };
    case END_TIMER:
      return {
        ...state,
        timerActive: true,
        timerRunning: false,
        endTime: action.endTime,
      };
    case END_TASK:
      return {
        ...state,
        timerActive: false,
        timerRunning: false,
        startTime: null,
        endTime: null,
      };
    default:
        return state;
  }
}

export default appState;