import {Component} from 'angular2/core';
import { FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup} from 'angular2/common';

@Component ({
    selector: 'my-form',
    directives: [FORM_DIRECTIVES],
    templateUrl: 'app/form/form.component.html',
    providers: [FormBuilder]
})

export class TaskFormComponent {
    taskForm;
    radioItems = [1,2,3,4,5];
    model = {options: 1};
    payLoad = null;
    
    constructor(fb: FormBuilder) {
        this.taskForm = fb.group({
            "id": [30],
            "priority": [this.model.options, Validators.required],
            "taskDetails": ['', Validators.required]
        });
    }
    
    onSubmit() {
        this.taskForm.value.priority = this.model.options;
        this.payLoad = JSON.stringify(this.taskForm.value);
    }
}