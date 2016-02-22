System.register(['angular2/core', './task.service', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, task_service_1, router_1;
    var TaskDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (task_service_1_1) {
                task_service_1 = task_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            TaskDetailComponent = (function () {
                function TaskDetailComponent(_taskService, _routeParams) {
                    this._taskService = _taskService;
                    this._routeParams = _routeParams;
                }
                TaskDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._taskService.getTask(id).then(function (task) { return _this.task = task; });
                };
                TaskDetailComponent.prototype.goBack = function () {
                    window.history.back();
                };
                TaskDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-task-detail',
                        templateUrl: 'app/tasks/task-detail.component.html',
                        styleUrls: ['app/styles/task-detail.component.css']
                    }), 
                    __metadata('design:paramtypes', [task_service_1.TaskService, router_1.RouteParams])
                ], TaskDetailComponent);
                return TaskDetailComponent;
            })();
            exports_1("TaskDetailComponent", TaskDetailComponent);
        }
    }
});
//# sourceMappingURL=task-detail.component.js.map