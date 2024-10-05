// app.js

// Selecting elements
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('new-task');
const tasksList = document.getElementById('tasks-list');

// Function to add a new task
function addTask(event) {
    event.preventDefault(); // Prevent the form from submitting and reloading the page

    const taskText = taskInput.value.trim(); // Get the input value and trim extra spaces
    if (taskText === "") return; // Prevent adding empty tasks

    // Create a new list item (li)
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a "Complete" button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = "Complete";
    completeBtn.classList.add('complete-btn');
    completeBtn.onclick = () => li.classList.toggle('completed');

    // Create a "Delete" button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = () => li.remove();

    // Append the buttons to the list item
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    // Add the list item to the tasks list
    tasksList.appendChild(li);

    // Clear the input field after adding the task
    taskInput.value = "";
}

// Add event listener to the form
taskForm.addEventListener('submit', addTask);
