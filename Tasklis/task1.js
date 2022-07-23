window.onload = onLoadEvent;
function onLoadEvent() {
  let task = document.getElementById("task");
  let addBtn = document.getElementById("addBtn");
  let clearBTn = document.getElementById("clearBtn");
  let mainTask = document.getElementById("textField");

  if (task) {
    mainTask.textContent = localStorage.getItem('textinput');
  }

  addBtn.onclick = function () {
    //document.getElementById("textField").innerHTML += mainTask;
    if (localStorage.getItem("textinput") && task.value != null) {
      localStorage.setItem( "textinput", localStorage.getItem("textinput") + "\n" + task.value
      );
    } else {
      localStorage.setItem("textinput", task.value);
    }
    if (localStorage.getItem("textinput")) {
      mainTask.textContent = localStorage.getItem("textinput");
    }
  };
  clearBTn.onclick = function () {
    localStorage.clear();
    document.getElementById("task").value = "";
    document.getElementById("textField").value = "";
  };
}