import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';

const router = createBrowserRouter([{
  path:'/',
  element: <div>This is Home!</div>
},

]);


function App() {
  return <div>
    <RouterProvider router={router}/>
  </div>;
}

export default App;
