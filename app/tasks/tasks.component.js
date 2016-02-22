System.register(['angular2/core', './task-detail.component', './task.service', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, task_detail_component_1, task_service_1, router_1;
    var TasksComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (task_detail_component_1_1) {
                task_detail_component_1 = task_detail_component_1_1;
            },
            function (task_service_1_1) {
                task_service_1 = task_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            TasksComponent = (function () {
                function TasksComponent(_router, _taskService) {
                    this._router = _router;
                    this._taskService = _taskService;
                }
                TasksComponent.prototype.ngOnInit = function () {
                    this.getTasks();
                };
                TasksComponent.prototype.onSelect = function (task) {
                    this.selectedTask = task;
                };
                TasksComponent.prototype.getTasks = function () {
                    var _this = this;
                    this._taskService.getTasks().then(function (tasks) { return _this.tasks = tasks; });
                };
                TasksComponent.prototype.gotoDetail = function () {
                    this._router.navigate(['TaskDetail', { id: this.selectedTask.id }]);
                };
                TasksComponent = __decorate([
                    core_1.Component({
                        selector: 'my-tasks',
                        directives: [task_detail_component_1.TaskDetailComponent],
                        templateUrl: 'app/tasks/tasks.component.html',
                        styleUrls: ['app/styles/tasks.component.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, task_service_1.TaskService])
                ], TasksComponent);
                return TasksComponent;
            })();
            exports_1("TasksComponent", TasksComponent);
        }
    }
});
//# sourceMappingURL=tasks.component.js.map