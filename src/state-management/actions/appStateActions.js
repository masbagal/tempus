export const START_TASK = 'appState/Starting the task and timer';
export const END_TIMER = 'appState/Ending the timer, continuing to save';
export const END_TASK = 'appState/End the task, save and return to dashboard';

export const CHANGE_SELECTED_DATE = 'appState/Change active date and its tasks content';
export function startTask() { 
  return {
    type: START_TASK,
    startTime: new Date().getTime(),
  }
}

export function endTimer() {
  return {
    type: END_TIMER,
    endTime: new Date().getTime(),
  }
}

export function endTask() {
  return {
    type: END_TASK,
  }
}

export function changeActiveDate(dateKey, tasks) {
  return {
    type: CHANGE_SELECTED_DATE,
    activeDateKey: dateKey,
    currentDateTasks: tasks,
  }
}