document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //we always have to load this so that the html is fully loaded BEFORE the js starts to load or it will not find the elements that the functions are working with. 

  const newTaskForm = document.getElementById("create-task-form");
  //we want to get the entire form, so we can access different elements within it
  newTaskForm.addEventListener("submit", function(e){
  //you are adding a submit event, the submit will recognize a click or an enter. 
    e.preventDefault()
  //to stop the page from refreshing  
    const newLi = document.createElement("li")
    // create a new element called li
    const input = document.getElementById("new-task-description")
    //this is the id of the text typed 
    newLi.innerText = input.value 
    //we are passing the value of the input of the text typed in the box to the new element li that we created  
    TaskList.appendChild(newLi)  
    //the ID of the taks liks is going to get the newli inner text  
  })
});

const TaskList = document.getElementById("tasks")
//this is outside the function because we might need to access it for different functions/methods

// when we create a new task we want to 1) create a new li element 2) add whatever is typed to the li element 3) add that html element to the appropriate page on tha page (task list)