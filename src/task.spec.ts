// import {Task} from '../app/tasks/task.js';
import {Task} from './task.js';

describe('Task', () => {
    it('has content given in the constructor', () => {
        let task = new Task(1, "Task 1", 2);
        expect(task.content).toEqual('Task 1');
        // let task1 = 1;
        // expect(task1).toEqual(1);
    });
    it('has the id given in the constructor', function(){
        var task = new Task(1, 'Task 1', 2);
        expect(task.id).toEqual(1);
    });
    
    it('has the priority in the constructor', function(){
        var task = new Task(1, 'Task 1', 2);
        expect(task.priority).toEqual(2);
    });
});