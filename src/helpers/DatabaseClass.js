import lokijs from 'lokijs';
import { generateTodayDateKey } from './DateUtil';

export default class TaskDatabase {
  constructor() {
    const dbInitialize = () => {
      let entries = db.getCollection("tasks");
      if (!entries) {
        entries = db.addCollection("tasks");
      }
      this._taskDb = entries;
    }
    
    const db = new lokijs('taskdb.db', {
      indices: ['dateKey'],
      env: 'BROWSER',
      autoload: true,
      autoloadCallback : dbInitialize,
      autosave: true, 
      autosaveInterval: 4000
    });
  }

  addTask(taskObject, dateKey) {
    const addedDateKey = dateKey || generateTodayDateKey();
    const addedTask = {
      dateKey: addedDateKey,
      ...taskObject,
    };
    this._taskDb.insert(addedTask);
  }

  getTasksByDateKey(dateKey) {
    return this._taskDb.find({ dateKey });
  }

}