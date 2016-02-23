System.register(['./task.js'], function(exports_1) {
    var task_js_1;
    return {
        setters:[
            function (task_js_1_1) {
                task_js_1 = task_js_1_1;
            }],
        execute: function() {
            describe('Task', function () {
                it('has content given in the constructor', function () {
                    var task = new task_js_1.Task(1, "Task 1", 2);
                    expect(task.content).toEqual('Task 1');
                    // let task1 = 1;
                    // expect(task1).toEqual(1);
                });
                it('has the id given in the constructor', function () {
                    var task = new task_js_1.Task(1, 'Task 1', 2);
                    expect(task.id).toEqual(1);
                });
                it('has the priority in the constructor', function () {
                    var task = new task_js_1.Task(1, 'Task 1', 2);
                    expect(task.priority).toEqual(2);
                });
            });
        }
    }
});
//# sourceMappingURL=task.spec.js.map