// Function to show modal on button click
const showModal = (modalId) => {
  const modalElem = document.getElementById(modalId);
  modalElem.style.display = "block";
};

// Function to hide modal
const hideModal = (modalId) => {
  const modalElem = document.getElementById(modalId);
  modalElem.style.display = "none";
};

// Function to save task to local storage for a specific stage
const saveTaskToLocal = (task, stage) => {
  let tasks = JSON.parse(localStorage.getItem(stage)) || [];
  tasks.push(task);
  localStorage.setItem(stage, JSON.stringify(tasks));
};

// Function to append task to the corresponding stage column
const appendTaskToStage = (newTask, stage) => {
  // Append new task to the corresponding stage column
  document.querySelector(`.${stage}-cl`).appendChild(newTask);
};

// Handle task form submission for a specific stage
const handleTaskSubmission = (e, stage) => {
  e.preventDefault();

  // Get form values
  const taskName = document.getElementById(`${stage}TaskName`).value;
  const priority = document.getElementById(`${stage}Priority`).value;
  const startDate = document.getElementById(`${stage}StartDate`).value;
  const endDate = document.getElementById(`${stage}EndDate`).value;

  // Create task object
  const task = {
    name: taskName,
    priority: priority,
    startDate: startDate,
    endDate: endDate,
  };

  // Save task to local storage
  saveTaskToLocal(task, stage);

  // Hide the modal
  hideModal(`${stage}Modal`);

  // Clear form fields
  document.getElementById(`${stage}Form`).reset();

  // Clone task template and populate with form values
  const taskTemplate = document.querySelector(`.${stage}-task-box`);
  const newTask = taskTemplate.cloneNode(true);
  newTask.style.display = "block";

  // Remove .task-box-comment element
  const taskBoxComment = newTask.querySelector(".task-box-comment");
  if (taskBoxComment) {
    taskBoxComment.remove();
  }

  // Populate task details
  const priorityElem = newTask.querySelector(".priority");
  priorityElem.textContent = priority;

  // Add appropriate class based on priority
  priorityElem.classList.remove(
    "low-priority",
    "medium-priority",
    "high-priority"
  );
  if (priority === "Low") {
    priorityElem.classList.add("low-priority");
  } else if (priority === "Medium") {
    priorityElem.classList.add("medium-priority");
  } else if (priority === "High") {
    priorityElem.classList.add("high-priority");
  }

  newTask.querySelector(".task-box-details h4").textContent = taskName;
  newTask.querySelector(
    ".task-box-details p"
  ).textContent = `${startDate} → ${endDate}`;

  // Append new task to the corresponding stage column
  appendTaskToStage(newTask, stage);
};

// Select elements
const modalElem = document.getElementById("taskModal");
const btn = document.querySelector(".add-task-btn button");
const spanElem = document.querySelector(".close-task");

// Show modal on button click
btn.onclick = () => {
  showModal("taskModal");
};

// Hide modal on close click
spanElem.addEventListener("click", () => {
  hideModal("taskModal");
});

// Hide modal on window click outside the modal
window.addEventListener("click", (event) => {
  if (event.target == modalElem) {
    hideModal("taskModal");
  }
});

// Handle task form submission for each stage
document.getElementById("backlogForm").onsubmit = (e) => {
  handleTaskSubmission(e, "backlog");
};

document.getElementById("todoForm").onsubmit = (e) => {
  handleTaskSubmission(e, "todo");
};

document.getElementById("progressForm").onsubmit = (e) => {
  handleTaskSubmission(e, "progress");
};

document.getElementById("reviewForm").onsubmit = (e) => {
  handleTaskSubmission(e, "review");
};

document.getElementById("doneForm").onsubmit = (e) => {
  handleTaskSubmission(e, "done");
};
