let IdCounter = 0;
const input = document.querySelector('input[type="text"]');

userInput.addEventListener("submit", (e) => {
  e.preventDefault();
  add();
});

const add = () => {
  IdCounter++;
  let newValue = input.value;
  list.innerHTML += `<div class="task-container" id="${IdCounter}">
  <label>
    <input type="checkbox">
    ${newValue}
  </label>
  <img src="./img/delete.png" class="closeBtn">
</div>`;
  input.value = "";
  updateStats();
};

list.addEventListener("click", (e) => {
  if (e.srcElement.nodeName === "INPUT") {
    updateStats();
  } else if (e.srcElement.nodeName === "IMG") {
    deleteTask(e.srcElement.parentNode.id);
  }
});

const updateStats = () => {
  let element = list.querySelectorAll("div");
  let checkbox = list.querySelectorAll('input[type="checkbox"]:checked');

  stats.innerHTML = `<p>Tareas Pendientes: ${element.length} Completadas:${checkbox.length}</p>`;
};

const deleteTask = (id) => {
  let taskToDelete = document.getElementById(id);
  list.removeChild(taskToDelete);
  updateStats();
};
