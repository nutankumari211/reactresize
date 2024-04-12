# React Rnd Component Resizing and Positioning
This project demonstrates how to use the react-rnd library to create resizable and draggable components in a React application. It also includes functionality to maintain a consistent distance between the components when they are resized or dragged.

# Features
Three resizable and draggable components (Rnd1, Rnd2, and Rnd3).
Components adjust their sizes and positions based on resizing and dragging operations.
Maintains a consistent distance between Rnd1, Rnd2, and Rnd3.



# Steps 
  1. Download the zip file
  2. Navigate to project directory
  3. npm install
  4. npm start


# How it Works
Rnd components are defined with initial sizes, positions, and event handlers for resizing and dragging.
The handleResizeStop method adjusts the sizes and positions of the components based on the resizing operation.
The handleDragStop method updates the positions of the components when they are dragged.
The updateSizes method calculates and updates the x positions of Rnd1, Rnd2, and Rnd3 to maintain a consistent distance between them.

