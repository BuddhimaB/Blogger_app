import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';



function App() {
  return <div>
    <RouterProvider router={createBrowserRouter()}/>
  </div>;
}

export default App;
