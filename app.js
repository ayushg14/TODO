document
  .getElementById("add-task-button")
  .addEventListener("click", createTask);

function createTask() {
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const taskList = document.getElementById("task-list");
  const taskItem = document.createElement("li");
  taskItem.className = "task-item";

  const taskTextSpan = document.createElement("span");
  taskTextSpan.className = "task-text";
  taskTextSpan.textContent = taskText;

  const taskButtons = document.createElement("div");
  taskButtons.className = "task-buttons";

  const doneButton = document.createElement("button");
  doneButton.className = "done-button";
  doneButton.textContent = "Done";
  doneButton.addEventListener("click", () => {
    taskItem.classList.toggle("completed");
  });

  const modifyButton = document.createElement("button");
  modifyButton.className = "modify-button";
  modifyButton.textContent = "Edit";
  modifyButton.addEventListener("click", () => {
    const newTaskText = prompt("Edit task:", taskTextSpan.textContent);
    if (newTaskText !== null) {
      taskTextSpan.textContent = newTaskText.trim();
    }
  });

  const removeButton = document.createElement("button");
  removeButton.className = "remove-button";
  removeButton.textContent = "Delete";
  removeButton.addEventListener("click", () => {
    taskList.removeChild(taskItem);
  });

  taskButtons.appendChild(doneButton);
  taskButtons.appendChild(modifyButton);
  taskButtons.appendChild(removeButton);

  taskItem.appendChild(taskTextSpan);
  taskItem.appendChild(taskButtons);
  taskList.appendChild(taskItem);

  taskInput.value = "";
}