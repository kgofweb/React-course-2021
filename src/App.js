// We don't need to import react from 'react' with this new version
import { useState, useEffect } from 'react';
// React Router
import { BrowserRouter as Router, Route } from 'react-router-dom';
// My compoenents
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Tasks from './components/task/Tasks';
import AddTasks from './components/Add Tasks/AddTasks';

const App = () => {
  // Show Tasks
  const [showTaskAdd, setShowTaskAdd] = useState(false);
  // Differents Tasks
  const [ tasks, setTasks ] = useState([]);

  // Fetch Tasks
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }

    getTasks();
  }, []);

  // Fetch tasks from server
  const fetchTasks = async () => {
    const response = await fetch('http://localhost:5000/tasks');
    const data = await response.json();
    return data;
  }

  // Fetch tasks from server (for toggleReminder)
  const fetchTask = async (id) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await response.json();
    return data;
  }

  // Add Taks
  const addTasks = async (task) => {
    const response = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: { 
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task),
    });

    const data = await response.json();
    setTasks([...tasks, data]);
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToggle = await fetchTask(id);
    const updateTasks = {
      ...taskToggle,
      reminder: !taskToggle.reminder
    }

    // Send response
    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updateTasks)
    });

    // Get data
    const data = await response.json();
    setTasks(
      tasks.map((task) =>
        task.id === id ? 
        {...task, reminder: data.reminder} : task
      )
    );
  }

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'});

    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <Router>
      <div className='container'>
        <Header 
          // Toogle the form (AddTask)
          onAdd={() => setShowTaskAdd(!showTaskAdd)}
          // Change text, color of button
          showAdd={showTaskAdd}
        />

        <Route path='/' exact render={(props) => (
          <>
            {/* Show the form if click on button Add */}
            { showTaskAdd && <AddTasks onAdd={addTasks}/> }
            
            {
              tasks.length > 0 ? (
                <Tasks
                  data={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : ('No Tasks to show')
            }
          </>
        )}/>

        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  )
}

export default App;