import { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useNavigate, useParams } from "react-router-dom";

const Update = () => {
    // update
    const {id} = useParams();

    const [values, setValues] = useState({
        title: '',
        description: '',
        sets: '',
        reps: ''
    })

    useEffect(() => {
        axios.get('http://localhost:8000/Workout/'+ id)
        .then(res => {
            setValues(res.data);
        })
        .catch(err => console.log(err));
    }, [])
    
    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put('http://localhost:8000/Workout/'+ id, values)
        .then(res => {
            console.log(res);
            navigate('/')
        })
        .catch(err => console.log(err));
    }
    return ( 
        <div className="d-flex w-100 justify-content-center align-items-center" style={{height: '100vh'}}>
            
            <form onSubmit={handleUpdate} className="w-75 bg-light bg-opacity-50 card p-3">
                <div className='d-flex justify-content-end'>
                    <button type="submit" class="btn-sm btn btn-outline-primary">Update Journal</button>
                </div>

                <div class="mb-3">
                    <label for="" class="form-label fw-bold">Workout Name</label>
                    <input type="text" class="form-control bg-light bg-opacity-75" name="" id="" placeholder="Enter workout name" value={values.workout} onChange={e => setValues({...values, workout: e.target.value})}/>
                </div>

                <div class="mb-3">
                    <label for="" class="form-label fw-bold">Description</label>
                    <textarea class="form-control bg-light bg-opacity-75" name="" id="" rows="3" placeholder="Enter workout description" value={values.description} onChange={e => setValues({...values, description: e.target.value})}></textarea>
                </div>

                <div className="d-flex">
                    <div class="mb-3 w-50 me-2">
                        <label for="" class="form-label fw-bold">Repetition</label>
                        <input type="number" class="form-control bg-light bg-opacity-75" name="" id="" value={values.reps} onChange={e => setValues({...values, reps: e.target.value})}/>
                    </div>

                    <div class="mb-3 w-50 ms-2">
                        <label for="" class="form-label fw-bold">Set</label>
                        <input type="number" class="form-control bg-light bg-opacity-75" name="" id="" value={values.sets} onChange={e => setValues({...values, sets: e.target.value})}/>
                    </div>
                </div>
                
            </form>
            
        </div>
     );
}
 
export default Update;