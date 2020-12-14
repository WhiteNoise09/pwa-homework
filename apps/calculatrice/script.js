var resultContainer = null;

window.addEventListener('DOMContentLoaded', () => {
	resultContainer = document.getElementById('result-container')
	const buttons = document.querySelectorAll('.to-add');
	buttons.forEach(elmt => {
		elmt.addEventListener('click', () => {
			resultContainer.value += elmt.textContent;
		});
	});
	const clearButton = document.getElementById('clear');
	const deleteButton = document.getElementById('delete');
	const equalButton = document.getElementById('equal');

	deleteButton.addEventListener('click', () => {
		resultContainer.value = resultContainer.value.slice(0, -1)
	});
	clearButton.addEventListener('click', () => {
		resultContainer.value = "";
	});
	equalButton.addEventListener('click', () => {
		resultContainer.value = eval(resultContainer.value);
	});
});