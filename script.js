document.getElementById('addTaskButton').addEventListener('click', () => {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('taskList');

    // Create new list item
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Add delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        listItem.remove();
    });

    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = '';
});
