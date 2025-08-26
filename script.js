function addTask() {
  const taskInput = document.getElementById("taskInput");
  const dateTimeInput = document.getElementById("dateTimeInput");

  const taskText = taskInput.value.trim();
  const dateTime = dateTimeInput.value;

  if (taskText === "") return;

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");

  const infoDiv = document.createElement("div");
  infoDiv.className = "task-info";
  infoDiv.innerHTML = `<strong>${taskText}</strong><br><small>${dateTime}</small>`;

  const actionsDiv = document.createElement("div");
  actionsDiv.className = "actions";

  const doneBtn = document.createElement("button");
  doneBtn.innerText = "✔";
  doneBtn.onclick = () => {
    infoDiv.classList.toggle("completed");
  };

  const editBtn = document.createElement("button");
  editBtn.innerText = "✏";
  editBtn.className = "edit";
  editBtn.onclick = () => {
    const newTask = prompt("Edit Task:", taskText);
    if (newTask) infoDiv.querySelector("strong").innerText = newTask;
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "🗑";
  deleteBtn.className = "delete";
  deleteBtn.onclick = () => {
    taskList.removeChild(li);
  };

  actionsDiv.appendChild(doneBtn);  
  actionsDiv.appendChild(editBtn);
  actionsDiv.appendChild(deleteBtn);

  li.appendChild(infoDiv);
  li.appendChild(actionsDiv);
  taskList.appendChild(li);

  taskInput.value = "";
  dateTimeInput.value = "";
}
