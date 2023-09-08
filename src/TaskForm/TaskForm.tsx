import { useState, MouseEvent } from 'react';

const TaskForm = ({ addTask } : { addTask: Function }) => {
  const [task, setTask] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const createTask = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTask({ id: 1, task, description})
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