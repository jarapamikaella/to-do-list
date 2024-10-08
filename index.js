const todoList = [
    "Workout",
    "Create To Do List App"
];

const checkboxList = document.getElementById('item-list');

function addToDo() {
    const newItem = document.getElementById('todo-input-field').value.trim();
    if (newItem) {
        todoList.push(newItem);
        createTodoItem(newItem);
        document.getElementById('todo-input-field').value = "";
    }
}

todoList.forEach(createTodoItem);

function createTodoItem(item) {
    const itemContainer = document.createElement('li');
    
    // Create a checkbox input element
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = item; // Set id to the item name for easier identification
    
    // Create a label for the checkbox
    const label = document.createElement('label');
    label.htmlFor = item; // Link the label to the checkbox using the id
    label.textContent = item; // Set the label text to the item name
    
    // Append the checkbox and label to the container
    itemContainer.appendChild(checkbox);
    itemContainer.appendChild(label);
    
    // Append the container to the checkbox list
    checkboxList.appendChild(itemContainer);

    // Event listener to strike through text when checkbox is checked/unchecked
    checkbox.addEventListener('change', function() {
        checkbox.checked = !checkbox.checked
        itemContainer.classList.toggle('checked', checkbox.checked);
    });

    // Event listener to check/uncheck the checkbox when clicking on the list item
    itemContainer.addEventListener('click', function() {
        checkbox.checked = !checkbox.checked; // Toggle checkbox state
        itemContainer.classList.toggle('checked', checkbox.checked); // Update class based on checkbox state
    });
}