import "./pages/login/Login"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import "./style.scss";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import RightBar from "./components/rightBar/RightBar";
import LeftBar from "./components/leftBar/LeftBar";
import Profile from "./pages/profile/Profile";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkMode.jsx";
function App() {
  const currentUser = true;

  // const {darkMode}=useContext(DarkModeContext);
  // console.log(darkMode);

  const Layout =()=>{


    return (
      <div className="theme-dark">
        <Navbar/>
        <div style={{display:"flex"}}>
          <LeftBar/>
          <div style={{flex:6}}>
          <Outlet/>
          </div>
        
          <RightBar/>

        </div>
      </div>

  )
  }
  const ProtectedRoute =({
    children
  })=>{
    if(!currentUser){
      return <Navigate to ="/login"/>
    }
    return children;
  }
  const router = createBrowserRouter([
    {
      path:"/",
      element:
      <ProtectedRoute>
        <Layout/>
      </ProtectedRoute>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/profile/:id",
          element:<Profile/>
        }
      ]
    }
    ,
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/register",
      element:<Register/>
    },
  ]);
  return <div>
   <RouterProvider router={router} />
    
  </div>;
}

export default App;
