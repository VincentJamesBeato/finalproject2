import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
    return ( 
        <div className="w-25 bg-dark" style={{ height: '100vh' }}>
            <h1 className="text-light fs-3 text-center py-5">WORKOUT BUDDY</h1>
            <hr className="text-light"/>
            <div className="d-flex flex-column align-items-center">
                <Link
                    to="/"
                    className="active-link active text-light text-decoration-none my-4 fw-bolder"
                >
                    Home
                </Link>
                <Link
                    to="/Workout"
                    className="active-link text-light text-decoration-none my-4 fw-bolder"
                >
                    Workouts
                </Link>
                {/* <Link
                    to="/add-workout"
                    className="active-link text-light text-decoration-none my-4 fw-bolder"
                >
                    Add Workout
                </Link> */}
            </div>
            <Outlet />
        </div>
    );
}

export default Sidebar;
