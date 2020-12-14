let tasksList = null;

window.addEventListener('DOMContentLoaded', () => {
	tasksList = document.getElementById('tasks-list');
});

function addTask() {
	let taskName = prompt('Nom de la tâche :');
	let taskElement = document.createElement('li');
	taskElement.textContent = taskName;

	tasksList.appendChild(taskElement);
}