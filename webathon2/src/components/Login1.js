import { useForm } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import { useContext,useEffect } from 'react';
import { loginContext } from './contexts/loginContext';
import React from 'react'
import { useNavigate } from 'react-router-dom'

import Button from 'react-bootstrap/Button';
function Login1() {
// Login.js
const { currentUser, error, userLoginStatus, loginUser} = useContext(loginContext);
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleUserLogin = (userCredObj) => {
    loginUser(userCredObj);
  };

  useEffect(() => {
    if (userLoginStatus === true) {
      navigate('/Home2');
    }
  }, [userLoginStatus]);

  
  return (
    <div>
      {error.length !== 0 && (
        <p className="display-3 text-danger text-center">{error}</p>
      )}
      <div className='d-flex  mt-5 mb-5'>
     <form onSubmit={handleSubmit(handleUserLogin)} className='mx-auto'>
    <div className="">
    <div className='ham '>
        <h1 className='mb-5'>ORGANISATION LOGIN</h1>
    </div>
    <div className="mx-auto justify-content-center">
        <div className='mb-3'>
            <TextField 
                id="Username" 
                label="Username/Email" 
                variant="outlined" className='bg-white'
                {...register('Username', { required: true, minLength: 5, maxLength: 16 })} 
            />
            {errors.Username?.type === 'required' && <p className='text-danger m-0 p-0'>*Username/Email is required</p>}
            {errors.Username?.type === 'minLength' && <p className='text-danger m-0 p-0'>*Minimum Length is 5 characters</p>}
            {errors.Username?.type === 'maxLength' && <p className='text-danger m-0 p-0'>*Maximum Length is 16 characters</p>}
        </div>
        <div>
            <TextField 
                id="Password" 
                label="Password" 
                variant="outlined" 
                type="password"  className='bg-white'
                {...register('Password', { required: true, minLength: 6, maxLength: 15 })} 
            />
            {errors.Password?.type === 'required' && <p className='text-danger m-0 p-0'>*Password is required</p>}
            {errors.Password?.type === 'minLength' && <p className='text-danger m-0 p-0'>*Minimum Length is 6 characters</p>}
            {errors.Password?.type === 'maxLength' && <p className='text-danger m-0 p-0'>*Maximum Length is 15 characters</p>}
        </div>
    </div>
    <div className="d-flex  mt-5">
        <Button type="submit" variant='contained' className='bg-success'>Login</Button>
    </div>
    <a href="/SignUp1">SignUp</a>
    </div>
</form>

    </div>
    </div>
  )
}

export default Login1