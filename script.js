const editableArea = document.getElementById('editable-area');
const addButton = document.getElementById('add-text');
const undoButton = document.getElementById('undo');
const redoButton = document.getElementById('redo');
const textInput = document.getElementById('text-input');
const fontSizeInput = document.getElementById('font-size');
const fontStyleSelect = document.getElementById('font-style');
const textColorInput = document.getElementById('text-color');
const deleteButton = document.getElementById('delete-word');

let history = []; // Stores all states for undo
let redoStack = []; // Stores states for redo
let currentDraggingElement = null; // Tracks the element being dragged

// Save the current state to history
function saveState() {
    const currentState = Array.from(editableArea.children)
        .filter((child) => child.classList.contains('text-element'))
        .map((child) => ({
            text: child.textContent,
            fontSize: child.style.fontSize,
            fontWeight: child.style.fontWeight,
            fontStyle: child.style.fontStyle,
            color: child.style.color,
            left: child.style.left,
            top: child.style.top,
        }));
    history.push(currentState);
}

// Restore a given state
function restoreState(state) {
    editableArea.innerHTML = '<button id="delete-word" class="hidden">Delete</button>';
    state.forEach((item) => {
        const textElement = document.createElement('span');
        textElement.classList.add('text-element');
        textElement.textContent = item.text;
        textElement.style.fontSize = item.fontSize;
        textElement.style.fontWeight = item.fontWeight;
        textElement.style.fontStyle = item.fontStyle;
        textElement.style.color = item.color;
        textElement.style.left = item.left;
        textElement.style.top = item.top;

        editableArea.appendChild(textElement);
        makeDraggable(textElement); // Ensure newly added elements are draggable
    });
}

// Add Text
addButton.addEventListener('click', () => {
    const text = textInput.value.trim();
    if (!text) return alert('Please enter some text.');

    const newTextElement = document.createElement('span');
    newTextElement.classList.add('text-element');
    newTextElement.textContent = text;
    newTextElement.style.fontSize = fontSizeInput.value + 'px';
    newTextElement.style.fontWeight = fontStyleSelect.value === 'bold' ? 'bold' : 'normal';
    newTextElement.style.fontStyle = fontStyleSelect.value === 'italic' ? 'italic' : 'normal';
    newTextElement.style.color = textColorInput.value;
    newTextElement.style.left = '10px';
    newTextElement.style.top = '10px';

    editableArea.appendChild(newTextElement);
    makeDraggable(newTextElement); // Make new element draggable
    saveState();
    redoStack = []; // Clear redo stack
    textInput.value = '';
});

// Undo
undoButton.addEventListener('click', () => {
    if (history.length <= 1) return alert('Nothing to undo.');
    redoStack.push(history.pop());
    restoreState(history[history.length - 1]);
});

// Redo
redoButton.addEventListener('click', () => {
    if (redoStack.length === 0) return alert('Nothing to redo.');
    const redoState = redoStack.pop();
    history.push(redoState);
    restoreState(redoState);
});

// Make an element draggable
function makeDraggable(element) {
    let offsetX, offsetY;
    let isDragging = false;

    element.addEventListener('mousedown', (e) => {
        isDragging = true;
        currentDraggingElement = element;
        offsetX = e.clientX - parseInt(element.style.left, 10);
        offsetY = e.clientY - parseInt(element.style.top, 10);
        element.style.zIndex = 1000; // Bring to the front
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;

        element.style.left = `${x}px`;
        element.style.top = `${y}px`;
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            element.style.zIndex = 0; // Reset z-index
            saveState(); // Save state after dragging
        }
    });
}

// Initialize draggable functionality for existing elements
document.querySelectorAll('.text-element').forEach((el) => makeDraggable(el));
