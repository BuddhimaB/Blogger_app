import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Writer

const router = createBrowserRouter([{
  path:'/',
  element: <div>This is Home!</div>
},

{
  path:'/register',
  element: <Register/>
},
{
  path:'/login',
  element: <Login/>
}
]);


function App() {
  return <div>
    <RouterProvider router={router}/>
  </div>;
}

export default App;
