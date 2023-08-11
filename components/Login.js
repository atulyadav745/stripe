import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from './Navbar'

const Login = () => {
    const { loginWithPopup } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div className='fixed top-0 left-0 flex items-center justify-center w-screen h-screen'>
    <article className=" rounded-xl bg-darkwhite3 w-[300px] text-center justify-center ">
				
				<div className="flex flex-col flex-1 p-6 ">
					<a rel="noopener noreferrer" href="#" className="text-xl tracking-wider uppercase hover:underline dark:text-berry font-bold">stripe integration</a>
					<h3 className="flex-1 py-2 text-sm font-semibold leading-snug">"Choose flexibility with our subscription plans! Opt for monthly for short-term commitment or go annual for long-term savings. Enjoy our services with pricing that suits your preferences."</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400 items-center  flex-col">
						
						
						   {
        isAuthenticated ? (
        
          <button  class="bg-berry  text-white font-bold py-2 px-4 rounded mr-0 focus:bg-mauve " onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Logout
    </button>
         
        ) : (
          <button class="bg-berry text-white font-bold py-2 px-4 rounded mr-2 focus:bg-mauve text-base" onClick={() => loginWithPopup()}>LogIn</button>
          
          )
      }
						</div>
				</div>
			</article></div>
  )
}

export default Login
