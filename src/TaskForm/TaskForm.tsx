import { useState, MouseEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TaskForm = ({ addTask } : { addTask: Function }) => {
  const [task, setTask] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const createTask = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTask({ id: uuidv4(), task, description, completed: false })
    setTask('');
    setDescription('');
  }

 return (
  <form>
    <label htmlFor='task'>Task: </label>
    <input 
      id='task'
      placeholder='Task'
      value={task}
      onChange={e => setTask(e.target.value)}
    />
    <label htmlFor='task'>Description: </label>
    <input 
      id='description'
      placeholder='Task'
      value={description}
      onChange={e => setDescription(e.target.value)}
    />
    <button onClick={createTask}>Add Task</button>
  </form>
 )
}

export default TaskForm;