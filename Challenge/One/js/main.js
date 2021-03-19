import * as util from './utilities.js';
import {ToDo} from './TodoItem.js';

// Init
(()=>{
    if(!localStorage.getItem("toDoList")){
    // Init localStorage
    let test1 = new ToDo("Is this working?");
    let arr = [test1];
    arr = JSON.stringify(arr);
    localStorage.setItem("toDoList", arr);
    };
    // Init render
    util.render(JSON.parse(localStorage.getItem("toDoList")));
    // Init event listeners
    document.getElementById("addButton").addEventListener("click", () => {
        util.addToDo();
    })
    document.getElementById("allF").addEventListener("click", () => {
        util.renderAll();
    });
    document.getElementById("activeF").addEventListener("click", () =>{
        util.renderActive();
    });
    document.getElementById("completeF").addEventListener("click", () =>{
        util.renderComplete();
    })
})();