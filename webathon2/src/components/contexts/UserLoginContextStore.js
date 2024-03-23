import React ,{useState} from 'react';
import { loginContext } from './loginContext';
import axios from 'axios'

function UserLoginContextStore({children}) {
    let [currentUser,setCurrentUser]=useState({});
    let [error,setError]=useState("");
    let [userLoginStatus,setUserLoginStatus]=useState(false)

    //userlogin
    const loginUser=(userCredObj)=>{
       console.log(userCredObj)
        axios.post('http://localhost:3500/user-api/user-login',userCredObj)
        .then(response=>{
            if(response.status==201){
                console.log(response.data.message)
                //update current User state
                setCurrentUser({...response.data.user})
                //update user login status
                setUserLoginStatus(true)
                //update error status
                setError("")
                //store jwt token in local or session storage
                localStorage.setItem("token",response.data.token)
                
            }else{
                setError(response.data.message)
            }
        })
        .catch(err=>{
    console.log("dontknow error",err)
        })
    }
   

    
    // //userlogout
    // const logoutUser=()=>{
    //     //clear local or session storage
    //     localStorage.clear();
    //      //update user login status
    //      setUserLoginStatus(false)

    // }

  return (
   <loginContext.Provider value={{currentUser,error,userLoginStatus,loginUser}}>
        {children}
   </loginContext.Provider>
  )
}

export default UserLoginContextStore