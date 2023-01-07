import { useState } from "react";
import { useWorkoutContext } from '../hooks/useWorkoutContext';

const WorkoutForm = () => {

  const { dispatch } = useWorkoutContext();
  
  const [title, setTitle] = useState('');
  const [reps, setReps] = useState('');
  const [load, setLoad] = useState('');
  const [error, setError] = useState(null)

  const handleSubmit = async e => {
    e.preventDefault();

    const newWorkout = { title, reps, load };
    const response = await fetch('/api/workouts/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newWorkout)
    })
    const json = await response.json();

    if(response.ok) {
      setError(null);
      dispatch({
        type: 'CREATE_WORKOUT',
        payload: json
      })
    }

    if(!response.ok) {
      setError(json.error)
    }
  }
  
  return (  
    <form
      onSubmit={handleSubmit}
      className='create'
    >
      <label>Title:</label>
      <input type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <label>Load (in kg):</label>
      <input type="number"
        value={load}
        onChange={e => setLoad(e.target.value)}
      />
      <label>Reps:</label>
      <input type="number"
        value={reps}
        onChange={e => setReps(e.target.value)}
      />
      <button>Submit</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}
 
export default WorkoutForm;