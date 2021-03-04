import Task from './Task';

const Tasks = ({ data, onDelete, onToggle }) => {
  return (
    <>
      {
        data.map((task) => (
          <Task 
            key={task.id}
            taskChild={task}
            onDeleteTask={onDelete}
            onToggleReminder={onToggle}
          />
        ))
      }
    </>
  )
}

export default Tasks;