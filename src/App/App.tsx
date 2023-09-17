import { useState } from 'react';
import TaskForm from '../TaskForm/TaskForm';
import Column from '../Column/Column'
import './App.scss';
import { Task } from '../interfaces'

const App = () => {
  const [tasks, updateTask] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    updateTask([...tasks, task])
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Stay on Track</h1>
        <TaskForm addTask={addTask} />
      </header>
      <main>
        <Column taskData={tasks} />
        <Column taskData={[]} />
        <Column taskData={[]} />
        <Column taskData={[]} />
      </main>
    </div>
  );
}

export default App;
