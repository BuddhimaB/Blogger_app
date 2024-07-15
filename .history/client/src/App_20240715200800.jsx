import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';

const router = createBrowserRouter();
{
  path:'/',
  element: <div></div>
}

function App() {
  return <div>
    <RouterProvider router={createBrowserRouter()}/>
  </div>;
}

export default App;
