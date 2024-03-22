import TextField from '@mui/material/TextField'
import {Select,MenuItem,InputLabel,FormControl,Button} from '@mui/material'
import './SignUp.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'


function SignUp() {
    let navigate= useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm();

 
let [error,setError]=useState("")
 


  




  let formsubmit=(data)=>{






//instead of data as object we can give fd as object
    axios.post("http://localhost:3500/user-api/create-user",fd).then(response=>{
 // console.log(response)
 // console.log(response.status)
 if(response.status===201)
 {
 navigate('/Login')
}
 if(response.status!==201)
 {
   setError(response.data.message)
}
 }).catch((err)=>{
 if(err.response)
{
  setError(err.message);
}
else if(err.request)
{
  setError(err.message);
}
else
{
  setError(err.message);
}
})

  }


    
    return (
        <div className=" userreg">
        <form onSubmit={handleSubmit(formsubmit)} className=' m-4 p-4 rounded-2 mx-auto'>
            <div className='ham'>
                <h1 className='mb-5'>USER REGISTRATION</h1>
            </div>
            <div className="row row-cols-2">
                <div className='mb-3'>
                    <TextField 
                    id="UserName" label="UserName" variant="outlined"
                     {...register('UserName', { required: true, minLength: "5", maxLength: "16" })} 
                     />
                    {errors.UserName?.type === 'required' && <p className='text-danger m-0 p-0'>*UserName is required</p>}
                    {errors.UserName?.type === 'minLength' && <p className='text-danger m-0 p-0'>*Minimum Length is 5 characters</p>}
                    {errors.UserName?.type === 'maxLength' && <p className='text-danger m-0 p-0'>*Maximum Length is 16 characters</p>}
                </div>
                <div>
                    <TextField id="Password" label="Password"  type="password" variant="outlined" {...register('Password', { required: true, minLength: "4", maxLength: "15" })} />
                    {errors.Password?.type === 'required' && <p className='text-danger m-0 p-0'>*Password is required</p>}
                    {errors.Password?.type === 'minLength' && <p className='text-danger m-0 p-0'>*minimum Length is 5 characters</p>}
                    {errors.Password?.type === 'maxLength' && <p className='text-danger m-0 p-0'>*Maximum Length is 16 characters</p>}
                </div>
            </div>
            <div className="row row-cols-sm-2 mb-3">
                <div>
                    <label htmlFor="DateofBirth" className="form-label">Date of birth</label>
                    <input type="date" id="DateofBirth" className="form-control" {...register('DateofBirth', { required: true })} />
                    {errors.DateofBirth?.type === 'required' && <p className='text-danger m-0 p-0'>*required</p>}
                </div>
                <div>
                    <label className='mb-2'>Gender</label>
                    <div className="input-group gap-4">
                        <div>
                            <input type="radio" id="male" className='me-2' value={'male'} {...register('gender', { required: true })} />
                            <label htmlFor="male">Male</label>
                        </div>
                        <div>
                            <input type="radio" id="female" className='me-2' value={'female'} {...register('gender', { required: true })} />
                            <label htmlFor="female">Female</label>
                        </div>
                    </div>
                    {errors.gender?.type === 'required' && <p className='text-danger m-0 p-0'>*required</p>}
                </div>
            </div>
            { }
            <div className="row row-cols-sm-2 mb-3">
                <div className="col">
                    <TextField
                        id="input-with-icon-textfield"
                        label="Email"

                        variant="outlined"
                        {...register('Email', { required: true })} />
                    {errors.Email?.type === 'required' && <p className='text-danger m-0 p-0'>*required</p>}
                </div>
                <div className="col">

                    <TextField id="Phone Number" label="Phone Number" variant="outlined"{...register('Phonenumber', { required: true, min: "1000000000", max: "9999999999" })} />
                    {errors.Phonenumber?.type === 'required' && <p className='text-danger m-0 p-0'>*required</p>}
                    {(errors.Phonenumber?.type === 'min' || errors.Phonenumber?.type === 'max') && <p className='text-danger m-0 p-0'>10 digits</p>}
                </div>
            </div>
            <FormControl className='d-block'>
                <InputLabel id="simple-select-label">city</InputLabel>
                <Select
                    labelId="simple-select-label"
                    id="simple-select"
                    label="City"
                    value= {city}
                    onChange={handleChange}
                    style={{width:"100%"}}
                >
                    <MenuItem value="DEFAULT" disabled >choose option</MenuItem>
                    <MenuItem value="Hyderabad">Nalgonda</MenuItem>
                    <MenuItem value="Banglore">Mahabubnagar</MenuItem>
                    <MenuItem value="Chennai">Hyderabad</MenuItem>
                    <MenuItem value="Delhi">Khammam</MenuItem>
                    <MenuItem value="Mumbai">Mancheryal</MenuItem>
                    <MenuItem value="Kolkata">Kharimnagar</MenuItem>
                    <MenuItem value="Bhopal">Warangal</MenuItem>
                </Select>
                {errors.City?.type === 'required' && <p className='text-danger m-0 p-0'>*required</p>}
            </FormControl>
            <div className="d-flex justify-content-center mt-5">

            <Button type="submit" variant='contained'>Register</Button>
            </div>
        </form>
        </div>

    )
}
export default SignUp
