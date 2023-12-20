
import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onEditTask, onDeleteTask }) {
  return (
    <div>
      <h3>Your Tasks:</h3>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onEditTask={onEditTask}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
