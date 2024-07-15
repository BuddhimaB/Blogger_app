import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';

const router = createBrowserRouter([{
  path:'/',
  element: <div>This is Home!</div>
},
{
  path:'/register',
  element: <<div>This is test!</div>>
}
]);


function App() {
  return <div>
    <RouterProvider router={router}/>
  </div>;
}

export default App;
