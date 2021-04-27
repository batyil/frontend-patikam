const input = document.getElementById("task");
const buttonAdd = document.getElementById("liveToastBtn");
const listParent = document.getElementById("list");

const tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
if (tasks.length !== 0) updateTaskList();

function addTask(task) {
  tasks.push({ content: task, checked: false });
  updateTaskList();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  updateTaskList();
}

function updateChecked(index) {
  tasks[index].checked = !tasks[index].checked;
  updateTaskList();
}

function updateTaskList() {
  listParent.innerHTML = tasks
    .map(
      (task) =>
        `<li class=${task.checked ? "checked" : ""}>${task.content}
          <span class="close">×</span>
         </li>`
    )
    .join("");

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// EVENTS

function handleListParent(e) {
  if (e.target.id === "list") return;

  const getIndex = (item) => Array.from(listParent.children).indexOf(item);

  if (e.target.tagName === "LI") {
    updateChecked(getIndex(e.target));
  } else {
    deleteTask(getIndex(e.target.parentElement));
  }
}

function handleButtonAdd() {
  const task = input.value.trim();
  input.value = "";

  if (!task) {
    $(".error").toast("show");
    return;
  }

  addTask(task);
  $(".success").toast("show");
}

listParent.addEventListener("click", handleListParent);
buttonAdd.addEventListener("click", handleButtonAdd);
