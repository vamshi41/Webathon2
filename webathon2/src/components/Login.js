import { useForm } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import {Select,MenuItem,InputLabel,FormControl,Button} from '@mui/material'
import { useState } from 'react'
function Login() {

  let [city,setCity] = useState('')
  const handleChange = (e)=>{
      setCity(e.target.value)
  }
  let { register, handleSubmit, formState: { errors } } = useForm()

  let Putuserdata = (data) => {
      fetch("",
          {
              method: "POST",
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(data)
          }
      )
          .then((obj) => obj.json())
          .then((obj) => console.log(obj)
          )
          .catch((error) => console.log(error))
  };
  return (
    <div className='d-flex  mt-5'>
     <form onSubmit={handleSubmit(Putuserdata)} className='mx-auto'>
    <div className="">
    <div className='ham '>
        <h1 className='mb-5'>USER LOGIN</h1>
    </div>
    <div className="mx-auto justify-content-center">
        <div className='mb-3'>
            <TextField 
                id="Username" 
                label="Username/Email" 
                variant="outlined"
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
                type="password" 
                {...register('Password', { required: true, minLength: 6, maxLength: 15 })} 
            />
            {errors.Password?.type === 'required' && <p className='text-danger m-0 p-0'>*Password is required</p>}
            {errors.Password?.type === 'minLength' && <p className='text-danger m-0 p-0'>*Minimum Length is 6 characters</p>}
            {errors.Password?.type === 'maxLength' && <p className='text-danger m-0 p-0'>*Maximum Length is 15 characters</p>}
        </div>
    </div>
    <div className="d-flex  mt-5">
        <Button type="submit" variant='contained'>Login</Button>
    </div>
    </div>
</form>

    </div>
  )
}

export default Login