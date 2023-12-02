import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';

const Create = () => {
    const [values, setValues] = useState({
        workout: '',
        description: '',
        reps: '',
        sets: ''
    })

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/Workout', values)
        .then(res => {
            console.log(res);
            navigate('/')
        })
        .catch(err => console.log(err));
    }
    return ( 
        <div class="p-4 w-100 d-flex justify-content-center align-items-center">
            <form onSubmit={handleSubmit} className="w-75 bg-light bg-opacity-75 card p-3">
                <div class="mb-3">
                    <label for="" class="form-label fw-bold">Workout Name</label>
                    <input type="text" class="form-control bg-light bg-opacity-75" name="" id="" placeholder="Enter workout name" onChange={e => setValues({...values, workout: e.target.value})}/>
                </div>

                <div class="mb-3">
                    <label for="" class="form-label fw-bold">Description</label>
                    <textarea class="form-control bg-light bg-opacity-75" name="" id="" rows="3" placeholder="Enter workout description" onChange={e => setValues({...values, description: e.target.value})}></textarea>
                </div>

                <div className="d-flex">
                    <div class="mb-3 w-50 me-2">
                        <label for="" class="form-label fw-bold">Repetition</label>
                        <input type="number" class="form-control bg-light bg-opacity-75" name="" id="" onChange={e => setValues({...values, reps: e.target.value})}/>
                    </div>

                    <div class="mb-3 w-50 ms-2">
                        <label for="" class="form-label fw-bold">Set</label>
                        <input type="number" class="form-control bg-light bg-opacity-75" name="" id="" onChange={e => setValues({...values, sets: e.target.value})}/>
                    </div>
                </div>

                
                <div className='d-flex justify-content-end'>
                {/* <Link
                to="/"
                className="btn btn-outline-secondary text-decoration-none my-4 fw-bolder"
                >
                    Close
                </Link> */}
                    <button type="submit" class="btn-sm btn btn-outline-primary">Submit</button>
                </div>
                
            </form>
        </div>
     );
}
 
export default Create;