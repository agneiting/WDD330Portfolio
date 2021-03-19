// Main ToDos module

// ToDo Class
export class ToDo {
    constructor(content){
        this.timestamp = Date.now();
        this.content = content;
        this.completed = false;
    }
}

/*
// ToDo Class
export class Todo {
    id =  "";
    name = "";
    status = "";
    content = "";
    element = "";
    constructor(id, name, content) {
        this.id = id;
        this.name = name;
        this.content = content;
        //False = Incomplete; True = Complete
        this.status = false;
        this.element = "li";
        //Set localStorage
        localStorage.setItem(id, JSON.stringify(name, content, status, element));
    }

    toggleStatus() {
        this.status = !this.status;
    }
}
*/