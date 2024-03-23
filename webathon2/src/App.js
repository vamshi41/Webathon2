import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Rootlayout from './components/Rootlayout';
import Home from './components/Home';
import Landing from './components/Landing'
import Quiz from './components/Quiz'
import Makepaper from './components/Makepaper';
import SignUp1 from './components/SignUp1';
import Login1 from './components/Login1';
import Home2 from './components/Home2'
import UsersList from './components/UsersList';
import Userinfo from './components/Userinfo';
import Payments from './components/Payments'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
function App() {
   let userRouter=createBrowserRouter([
    {
      path:'/',
      element:<Rootlayout/>,
      children:[
        {
         path:'/',
         element:<Landing/>
        },
        {
         path:'/Payments',
         element:<Payments/>
        },
        {
        path:'/Home',
        element:<Home/>,
       
          
        
        },
        {
        path:'/Home2',
        element:<Home2/>,
       
          
        
        },
        {
        path:'/UsersList',
        element:<UsersList/>,
       
          
        
        },
        {
        path:'/Userinfo',
        element:<Userinfo/>,
       
          
        
        },
        {
          path:'/Makepaper',
          element:<Makepaper/>
        
        },
        {
          path:'/SignUp',
          element:<SignUp/>
        },
        {
          path:'/SignUp1',
          element:<SignUp1/>
        },
        {
          path:'/Quiz',
          element:<Quiz/>
        },
        {
          path:'/Login',
          element:<Login/>
        },
        {
          path:'/Login1',
          element:<Login1/>
        }
      ]
    }
   ])




  return (
    <div >
      <RouterProvider router={userRouter}></RouterProvider>

    </div>
  );
}

export default App;
