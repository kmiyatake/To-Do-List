System.register(['angular2/core', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var TaskFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            TaskFormComponent = (function () {
                function TaskFormComponent(fb) {
                    this.radioItems = [1, 2, 3, 4, 5];
                    this.model = { options: 1 };
                    this.payLoad = null;
                    this.taskForm = fb.group({
                        "id": [30],
                        "priority": [this.model.options, common_1.Validators.required],
                        "taskDetails": ['', common_1.Validators.required]
                    });
                }
                TaskFormComponent.prototype.onSubmit = function () {
                    this.taskForm.value.priority = this.model.options;
                    this.payLoad = JSON.stringify(this.taskForm.value);
                };
                TaskFormComponent = __decorate([
                    core_1.Component({
                        selector: 'my-form',
                        directives: [common_1.FORM_DIRECTIVES],
                        templateUrl: 'app/form/form.component.html',
                        providers: [common_1.FormBuilder]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], TaskFormComponent);
                return TaskFormComponent;
            })();
            exports_1("TaskFormComponent", TaskFormComponent);
        }
    }
});
//# sourceMappingURL=form.component.js.map