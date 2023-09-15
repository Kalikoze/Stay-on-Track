import { useState } from 'react';
import TaskForm from '../TaskForm/TaskForm';
import './App.scss';

interface Tasks {
  id: number,
  todo: string,
  completed: boolean
}


const App = () => {
  const [tasks, updateTask] = useState<Tasks[]>([]);

  const addTask = (task: Tasks) => {
    updateTask([...tasks, task])
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Stay on Track</h1>
        <TaskForm addTask={addTask} />
      </header>
      <main>

      </main>
    </div>
  );
}

export default App;
