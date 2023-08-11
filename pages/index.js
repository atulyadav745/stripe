import Hero from '../components/Hero'
import Login from '../components/Login';
import Navbar from '../components/Navbar'
import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <>
   
    {
        isAuthenticated ? (
          
          <div>

          <Navbar/>
          <Hero/>
          </div>
         
         
        ) : (
         <Login/>
          )
      }
      <ToastContainer />
   

    </>
  )
}
