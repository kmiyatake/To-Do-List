import {Task} from './task';
import {TASKS} from '../data/mock-tasks';
import {Injectable} from 'angular2/core';

@Injectable()
export class TaskService {
    getTasks() {
        return Promise.resolve(TASKS);
    }
    
    getTask(id: number) {
        return Promise.resolve(TASKS).then(tasks => tasks.filter(task => task.id === id)[0]);
    }
    
    getPriorityTasks() {
        return Promise.resolve(TASKS).then(tasks => tasks.sort(function(a, b) {return a.priority-b.priority}));
    }
}