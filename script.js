const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addButton = document.getElementById("add-button"); // Add button element

//restricts the user from adding a task when they dont input anything
//adds the task and adds a row by appending li and span which adds the circle and x
function addTask(){
    if (inputBox.value === ""){
        alert("You must write somemthing!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

//when the circle (li) or the x (span) is clicked then it will remove or cross out
listContainer.addEventListener("click", function(e){
    if (e.target && e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//to save the todo list data even after u close the app
function saveData(){
    //whatever is in the innerHTML will be stored with the name data
    localStorage.setItem("data", listContainer.innerHTML);

}

function displayTasks(){
    //fetches the data
    listContainer.innerHTML = localStorage.getItem("data");
}
displayTasks();
