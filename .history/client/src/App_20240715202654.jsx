import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Write from './pages/Write';
import Home from './pages/Home';
import Single from './pages/Single';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const router = createBrowserRouter([
  {
  path:'/',
  element: <Layout/>,
  children:[
{
    path:'/',
    element: <Home/>
},
{
  path:'/single',
  element: <Single/>
},
{
  path:'/write',
  element: <Write/>
},

]},

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

const Layout=()=>{
  return( <div>
    <Navbar/>
    <Outlet/>
    <Footer/>
  </div>);
 
};
export default App;
