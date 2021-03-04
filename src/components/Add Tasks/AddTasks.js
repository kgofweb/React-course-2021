import { useState } from 'react';

const AddTasks = ({ onAdd }) => {
  // Hook
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  // Submit Task
  const onSubmit = (e) => {
    e.preventDefault();

    // if fields are empty
    if(!text) {
      alert('Please add a task');
      return;
    } else {
      onAdd({text, day, reminder});

      // Clear input
      setText('');
      setDay('');
      setReminder(false);
    }
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label htmlFor='addTask'>Add Task</label>
        <input 
          type='text' 
          id='addTask' 
          placeholder='Add Task'
          // Get user input
          value={text}
          // Change state
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label htmlFor='day-and-time'>Day & Time</label>
        <input 
          type='text' 
          id='day-and-time' 
          placeholder='Add Day and Time'
          // Get input value
          value={day}
          // Change state
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label htmlFor='reminder'>Set Reminder</label>
        <input 
          type='checkbox'
          // Check if input checkbox is check or not
          checked={reminder}
          // Get input value
          value={reminder}
          // Change state 
          onChange={(event) => setReminder(event.currentTarget.checked)}
        />
      </div>

      <input
        type='submit'
        value='Save Tasks'
        className="btn btn-block"
      />
    </form>
  )
}

export default AddTasks;