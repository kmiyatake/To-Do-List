import {Component, OnInit} from 'angular2/core';
import {Task} from './task';
import {TaskService} from './task.service';
import {RouteParams} from 'angular2/router';

@Component({
    selector: 'my-task-detail',
    templateUrl: 'app/tasks/task-detail.component.html',
    styleUrls: ['app/styles/task-detail.component.css']
})

export class TaskDetailComponent {
    task: Task;
    
    constructor(private _taskService: TaskService, private _routeParams: RouteParams) {
        
    }
    
    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._taskService.getTask(id).then(task => this.task = task);
    }
    
    goBack() {
        window.history.back();
    }
}