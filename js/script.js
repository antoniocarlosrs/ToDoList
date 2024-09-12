const tasklist = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== ""){

        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="editButton" onclick="editTask(this)">Editar</button>
            <button class="deleteButton" onclick="deleteTask(this)">Remover</button>
        `;
        tasklist.appendChild(li);
        taskInput.value = "";
    }
}

// Editar as tarefas

function editTask(button) {
    const li = button.parentElement; 
    const span = li.querySelector("span");
    const newText = prompt("Editar tarefa:", span.textContent);
    if(newText !== null && newText.trim() !== ""){
        span.textContent = newText.trim();
    }
}

// Remover as tarefas

function deleteTask(button) {
    const li = button.parentElement;
    tasklist.removeChild(li)
}
