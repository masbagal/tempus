const actions = store => ({
  startTimer: state => ({ isTimerActive: true }),
  stopTimer: state => ({ isTimerActive: false })
});

export default actions;
