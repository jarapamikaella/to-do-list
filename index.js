const todoList = [
    "Workout",
    "Create To Do List App"
];

const checkboxList = document.getElementById('item-list')

function addToDo() {
    const newItem = document.getElementById('todo-input-field').value.trim();
    todoList.push(newItem)
    createTodoItem(newItem)
    document.getElementById('todo-input-field').value = ""
}

todoList.forEach(createTodoItem)

function createTodoItem(item) {
    const itemContainer = document.createElement('div');
    // Create a checkbox input element
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = item; // Set id to the item name for easier identification
    
    // Create a label for the checkbox
    const label = document.createElement('label');
    label.htmlFor = item; // Link the label to the checkbox using the id
    label.textContent = item; // Set the label text to the item name
    
    // Append the checkbox and label to the container div
    itemContainer.appendChild(checkbox);
    itemContainer.appendChild(label);
    
    // Append the container div to the checkbox list div
    checkboxList.appendChild(itemContainer);
}