import React from 'react';
import './Admin.css';
import LoginForm from './Components/Auth/LoginForm/LoginForm';


function Admin () {
    return (
        <>
            <div className='Main-body'>
                <LoginForm />
            </div>
        </>
    );
}

export default Admin;