System.register(['../data/mock-tasks', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var mock_tasks_1, core_1;
    var TaskService;
    return {
        setters:[
            function (mock_tasks_1_1) {
                mock_tasks_1 = mock_tasks_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TaskService = (function () {
                function TaskService() {
                }
                TaskService.prototype.getTasks = function () {
                    return Promise.resolve(mock_tasks_1.TASKS);
                };
                TaskService.prototype.getTask = function (id) {
                    return Promise.resolve(mock_tasks_1.TASKS).then(function (tasks) { return tasks.filter(function (task) { return task.id === id; })[0]; });
                };
                TaskService.prototype.getPriorityTasks = function () {
                    return Promise.resolve(mock_tasks_1.TASKS).then(function (tasks) { return tasks.sort(function (a, b) { return a.priority - b.priority; }); });
                };
                TaskService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], TaskService);
                return TaskService;
            })();
            exports_1("TaskService", TaskService);
        }
    }
});
//# sourceMappingURL=task.service.js.map