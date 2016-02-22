import {Component, OnInit} from 'angular2/core';
import {Task} from '../tasks/task';
import {TaskService} from '../tasks/task.service';
import { Router } from 'angular2/router';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/Dashboard/dashboard.component.html',
    styleUrls: ['app/styles/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    tasks: Task[] = [];
    
    constructor(private _router: Router, private _taskService: TaskService) {
        
    }
    
    ngOnInit() {
        this._taskService.getPriorityTasks().then(tasks => this.tasks = tasks.slice(0,4));
    }
    
    gotoDetail(task: Task) {
        let link = ['TaskDetail', { id: task.id }];
        this._router.navigate(link);
    }
}