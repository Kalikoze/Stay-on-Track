import { Task } from '../interfaces'

const TaskCard = ({ task, description, completed }: Task) => {
  return (
    <article>
      <h2>{task}</h2>
      <p>{description}</p>
    </article>
  )
}

export default TaskCard;