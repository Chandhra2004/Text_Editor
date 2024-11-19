# Draggable Text Editor with Undo and Redo

This project is a simple web-based text editor that allows users to add, move, and customize text elements interactively. Users can also undo and redo changes.

---

## Features

### **1. Add Text**
- Users can add text to the editor.
- Customizable options include:
  - Font size
  - Font style (Normal, Bold, Italic)
  - Text color
- Text elements are positioned initially at the top-left corner of the editable area.

### **2. Drag and Drop**
- Text elements are draggable within the editor area.
- Users can click and drag text to rearrange them as needed.

### **3. Undo and Redo**
- **Undo**: Revert the last change (e.g., moving text, adding new text).
- **Redo**: Restore the undone change.

---

## How to Use

### **1. Add Text**
- Enter your desired text in the input field.
- Choose your customization options:
  - **Font Size**: Use the number input to select font size.
  - **Font Style**: Select from "Normal," "Bold," or "Italic."
  - **Text Color**: Pick a color using the color picker.
- Click the **Add Text** button to add the text to the editor.

### **2. Drag Text**
- Click and drag any text element to reposition it in the editor area.

### **3. Undo/Redo**
- Click the **Undo** button to reverse the most recent change.
- Click the **Redo** button to restore the last undone change.

---

## Technologies Used

- **HTML**: For structure and layout.
- **CSS**: For styling the editor and controls.
- **JavaScript**: For interactivity (dragging, undo/redo, and text customization).

---

## Code Structure

### **HTML**
- Contains the editor layout and controls (input fields, buttons).

### **CSS**
- Styles the editor area, text elements, and control panel.
- Includes hover effects for interactive elements.

### **JavaScript**
- Manages the functionality:
  - Adding and styling text elements.
  - Making text draggable.
  - Implementing Undo/Redo functionality.

---

## How It Works

1. **Add Text**:
   - Adds a new text element to the editable area with the chosen style options.
   - Text is placed initially at the top-left corner.

2. **Drag and Drop**:
   - Text elements can be repositioned by clicking and dragging.

3. **Undo/Redo**:
   - Tracks changes using a history stack for Undo and Redo functionality.

---

## Future Enhancements

- Implement a delete button to remove specific text elements.
- Save the editor's state to local storage for persistence across sessions.
- Enable resizing of text elements for further customization.

---

## Preview

Here’s an example of the editor in action:

![Editor Screenshot](Screenshot%202024-11-20%20013601.png)


---

### **Instructions to Run Locally**

1. Clone this repository or copy the code.
2. Save the files (`index.html`, `styles.css`, `script.js`) in a single folder.
3. Open `index.html` in your browser to use the editor.

---

Enjoy your interactive text editor! 🎉
