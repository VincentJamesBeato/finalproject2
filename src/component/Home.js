import { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const [data, setData] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/Workout')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        const confirm = window.confirm("Would you like to delete?");
        if (confirm) {
            axios.delete(`http://localhost:8000/Workout/${id}`)
                .then(res => {
                    navigate('/');
                })
                .catch(err => console.log(err));
        }
    }
    return ( 
        <div className="p-4 w-75">
            <h1 className="text-center" style={{ fontSize: 70, fontFamily: 'Ephesis, sans-serif' }}>Welcome to Workout Buddy!</h1>
            <hr/>
            <div className="d-flex justify-content-end">
                <Link
                    to="/Create"
                    className="btn btn-outline-primary text-decoration-none my-4 fw-bolder"
                >
                    Create Workout
                </Link>
            </div>

            <div className="container">
                <h2>Done Workout List</h2>
                <div className="card px-3 pt-3">
                {data.map((d, i) => (
                    <div class="card text-center mb-3" key={i}>
                        <div class="card-header">
                            Workout Routine {d.id}
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{d.workout}</h5>
                            <p class="card-text">{d.description}</p>
                            <p class="card-text">Sets: {d.sets}</p>
                            <p class="card-text">Repetition: {d.reps}</p>
                        </div>
                        <div class="card-footer">
                            <div className="d-flex justify-content-end">
                                <Link to={`/Update/${d.id}`} className="btn btn-outline-warning btn-sm mx-3">Edit</Link>
                                <button onClick={() => handleDelete(d.id)} className="btn btn-outline-danger btn-sm">Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
     );
}
 
export default Home;