import { FaTrash } from 'react-icons/fa';

const Task = ({ taskChild, onDeleteTask, onToggleReminder }) => {
  return (
    <div 
      className={`task ${taskChild.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggleReminder(taskChild.id)}
    >
      <h3>
          {taskChild.text}{' '}
          <FaTrash
            style={{ color: '#df4759' }}
            onClick={() => onDeleteTask(taskChild.id)}
            onToggle={onToggleReminder}
          />
      </h3>
      <p> {taskChild.day} </p>
    </div>
  )
}

export default Task;