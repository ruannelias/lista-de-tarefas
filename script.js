function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Por favor, insira uma tarefa válida!");
        return;
    }

    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText}</span>
        <button onclick="toggleTaskStatus(this)">Concluir</button>
        <button onclick="removeTask(this)">Remover</button>
    `;
    taskList.appendChild(li);

    taskInput.value = "";
}

function toggleTaskStatus(button) {
    var taskItem = button.parentElement;
    taskItem.classList.toggle("completed");
    var buttonText = button.textContent === "Concluir" ? "Desfazer" : "Concluir";
    button.textContent = buttonText;
}

function removeTask(button) {
    var taskItem = button.parentElement;
    taskItem.remove();
}

function showTab(tabId) {
    var tabs = document.querySelectorAll('.tab-content');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
    }

    var activeTab = document.getElementById(tabId);
    activeTab.style.display = 'block';

    var activeTabButton = document.querySelector('.active-tab');
    if (activeTabButton) {
        activeTabButton.classList.remove('active-tab');
    }

    var clickedTabButton = document.getElementById(tabId.replace('Content', 'Tab'));
    clickedTabButton.classList.add('active-tab');
}

