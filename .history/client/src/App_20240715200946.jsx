import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Register from './components/Register';

const router = createBrowserRouter([{
  path:'/',
  element: <div>This is Home!</div>
},
{
  path:'/register',
  element: <Register/>
}
]);


function App() {
  return <div>
    <RouterProvider router={router}/>
  </div>;
}

export default App;
