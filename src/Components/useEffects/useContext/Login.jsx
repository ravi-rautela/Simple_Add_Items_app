import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const showAleart = () => {
        toast.success("Login Successfull!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
        });
    }
    return <div className='container mt-4'>
        <h2>Welcome to the LogIn page!</h2>
        <button className='btn btn-primary' onClick={showAleart}>LogIn</button>
        <ToastContainer />
    </div>;
}

export default Login;
