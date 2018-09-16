export const START_TASK = 'appState/Starting the task and timer';
export const END_TIMER = 'appState/Ending the timer, continuing to save';
export const END_TASK = 'appState/End the task, save and return to dashboard';

function changeAppState(currentState) {
  return {
    type: currentState
  }
}

export function startTask() { 
  return changeAppState(START_TASK);
}

export function endTimer() {
  return changeAppState(END_TIMER);
}

export function endTask() {
  return changeAppState(END_TASK);
}