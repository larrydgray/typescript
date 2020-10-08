"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const todoCollection_1 = require("./todoCollection");
const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
class JsonTodoCollection extends todoCollection_1.TodoCollection {
    constructor(userName, todoItems = []) {
        super(userName, []);
        this.userName = userName;
        this.database = lowdb(new FileSync("Todos.json"));
        if (this.database.has("task").value()) {
            let dbItems = this.database.get("tasks").value();
            console.log("Processing db items...");
            dbItems.forEach(item => {
                this.itemMap.set(item.id, new todoItem_1.TodoItem(item.id, item.task, item.complete));
                console.log("item:" + item.id);
            });
        }
        else {
            console.log("Creating new Database Todos.json...");
            this.database.set("tasks", todoItems).write();
            todoItems.forEach(item => this.itemMap.set(item.id, item));
        }
    }
    addTodo(task) {
        let result = super.addTodo(task);
        this.storeTasks();
        return result;
    }
    markComplete(id, complete) {
        super.markComplete(id, complete);
        this.storeTasks();
    }
    removeComplete() {
        super.removeComplete();
        this.storeTasks();
    }
    storeTasks() {
        this.database.set("tasks", [...this.itemMap.values()]).write();
    }
}
exports.JsonTodoCollection = JsonTodoCollection;
