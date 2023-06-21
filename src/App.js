import './App.css';
import React from 'react';
import TaskList from './TaskList';

// read a list of tasks.                          DONE

// add a task using the mouse or keyboard.

// mark any task as completed, using the mouse or keyboard.

// delete any task, using the mouse or keyboard.

// edit any task, using the mouse or keyboard.

// view a specific subset of tasks: All tasks, only the active task, or only the completed tasks.

// ---- adding timing from a calendar later? ----

function App() {
  return (
    <div className="App">
      <TaskList />
    </div>
  );
}

export default App;
