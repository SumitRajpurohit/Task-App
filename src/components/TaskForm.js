
import React from 'react';

function TaskForm({
  taskText,
  taskCategory,
  onTaskTextChange,
  onTaskCategoryChange,
  onCreateTask,
}) {
  return (
    <div>
      <h3>Create a new task:</h3>
      <input
        type="text"
        value={taskText}
        onChange={(e) => onTaskTextChange(e.target.value)}
        placeholder="Enter task text"
      />
      <select
        value={taskCategory}
        onChange={(e) => onTaskCategoryChange(e.target.value)}
      >
        <option value="Personal">Personal</option>
        <option value="Work">Work</option>
        
      </select>
      <button onClick={onCreateTask}>Create Task</button>
    </div>
  );
}

export default TaskForm;
