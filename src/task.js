System.register([], function(exports_1) {
    var Task;
    return {
        setters:[],
        execute: function() {
            Task = (function () {
                function Task(id, content, priority) {
                    this.id = id;
                    this.content = content;
                    this.priority = priority;
                }
                return Task;
            })();
            exports_1("Task", Task);
        }
    }
});
//# sourceMappingURL=task.js.map