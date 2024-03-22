import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Rootlayout from './components/Rootlayout';
import Home from './components/Home';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
function App() {
   let userRouter=createBrowserRouter([
    {
      path:'/',
      element:<Rootlayout/>,
      children:[
        {
        path:'',
        element:<Home/>
        },
        {
          path:'/SignUp',
          element:<SignUp/>
        },
        {
          path:'/Login',
          element:<Login/>
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
