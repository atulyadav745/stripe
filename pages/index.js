import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import { useAuth0 } from "@auth0/auth0-react";

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
          <Navbar/>
          )
      }
   

    </>
  )
}
