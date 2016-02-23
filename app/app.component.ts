import {Component} from 'angular2/core';
import {TasksComponent} from './tasks/tasks.component';
import {TaskService} from './tasks/task.service';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {DashboardComponent} from './Dashboard/dashboard.component';
import {TaskDetailComponent} from './tasks/task-detail.component';
import {TaskFormComponent} from './form/form.component';

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, TaskService],
    template: `
    <h1>{{title}}</h1>
    <nav>
        <a [routerLink]="['Dashboard']">Dashboard</a>
        <a [routerLink]="['Tasks']">Tasks</a>
        <a [routerLink]="['Form']">New Task</a>
    </nav>
    <router-outlet></router-outlet>
    `,
    styleUrls: ['app/styles/app.component.css']
})

@RouteConfig([
    {
        path: '/tasks',
        name: 'Tasks',
        component: TasksComponent
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/detail/:id',
        name: 'TaskDetail',
        component: TaskDetailComponent
    },
    {
        path: '/form',
        name: 'Form',
        component: TaskFormComponent
    }
])

export class AppComponent {
    title = "To Do List";
}