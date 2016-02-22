import {Component} from 'angular2/core';
import {Task} from './task';
import {TaskDetailComponent} from './task-detail.component';
import {TaskService} from './task.service';
import {OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
    selector: 'my-tasks',
    directives: [TaskDetailComponent],
    templateUrl: 'app/tasks/tasks.component.html',
    styleUrls:['app/styles/tasks.component.css']
})

export class TasksComponent implements OnInit {
    tasks: Task[];
    selectedTask: Task;
    
    constructor(private _router: Router, private _taskService: TaskService) {
        
    }
    
    ngOnInit() {
        this.getTasks();
    }
    
    onSelect(task: Task) {
        this.selectedTask = task;
    }
    
    getTasks() {
        this._taskService.getTasks().then(tasks => this.tasks = tasks);
    }
    
    gotoDetail() {
        this._router.navigate(['TaskDetail', {id: this.selectedTask.id }]);
    }
}