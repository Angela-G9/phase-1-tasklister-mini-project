document.addEventListener("DOMContentLoaded", () => {
    // Select the form element and the tasks list
    const taskForm = document.getElementById("create-task-form");
    const taskList = document.getElementById("tasks");
  
    // Event listener for form submission
    taskForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent the default form submission behavior
  
      // Get the task description from the input field
      const taskDescription = document.getElementById("new-task-description").value;
  
      if (taskDescription) {
        // Create a new <li> element for the task
        const taskItem = document.createElement("li");
  
        // Add the task description as the text content of the <li>
        taskItem.textContent = taskDescription;
  
        // Create a button to delete the task
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
          taskItem.remove(); // Remove the task when the delete button is clicked
        });
  
        // Append the delete button to the task item
        taskItem.appendChild(deleteButton);
  
        // Append the new task item to the task list
        taskList.appendChild(taskItem);
  
        // Clear the input field after the task is created
        document.getElementById("new-task-description").value = "";
      }
    });
  });
  