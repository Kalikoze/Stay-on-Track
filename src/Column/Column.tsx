import TaskCard from '../TaskCard/TaskCard';
import { Task } from '../interfaces';

const Column = ({ taskData }: { taskData: Task[] }) => {
  const tasks = taskData.map((task: Task) =>{
    return <TaskCard {...task} key={`Task: ${task.id}`} />
  });
  return (
    <section>
      {tasks}
    </section>
  )
}

export default Column;