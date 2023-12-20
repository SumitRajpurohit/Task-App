
import React, { useState, useEffect } from 'react';
import UserAuth from './components/UserAuth';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');
  const [taskCategory, setTaskCategory] = useState('Personal');

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));

    if (storedUser) {
      setUser(storedUser);
    }

    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [user, tasks]);

  const handleRegister = (username) => {
    setUser({ username });
  };

  const handleLogin = (username) => {
    setUser({ username });
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleCreateTask = () => {
    if (taskText.trim() === '') return;

    const newTask = {
      id: new Date().getTime(),
      text: taskText,
      category: taskCategory,
    };

    setTasks([...tasks, newTask]);
    setTaskText('');
  };

  const handleEditTask = (taskId, newText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, text: newText } : task
    );

    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <UserAuth
        user={user}
        onRegister={handleRegister}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />

      {user && (
        <div>
          <TaskForm
            taskText={taskText}
            taskCategory={taskCategory}
            onTaskTextChange={setTaskText}
            onTaskCategoryChange={setTaskCategory}
            onCreateTask={handleCreateTask}
          />

          <TaskList
            tasks={tasks}
            onEditTask={handleEditTask}
            onDeleteTask={handleDeleteTask}
          />
        </div>
      )}
    </div>
  );
}

export default App;
