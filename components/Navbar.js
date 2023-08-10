import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {

  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div className='absolute right-1 mt-2'>
          
    {
        isAuthenticated ? (
        
          <button class="bg-berry  text-white font-bold py-2 rounded px-4 focus:bg-mauve " onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Logout
    </button>
         
        ) : (
          <button class="bg-berry text-white font-bold py-2 px-4 rounded mr-2 focus:bg-mauve " onClick={() => loginWithRedirect()}>LogIn</button>
          
          )
      }

{ isAuthenticated && 
(<div class="dropdown relative profile">
<a class="dropdown-toggle flex items-center hidden-arrow" href="#" id="dropdownMenuButton2" role="button"
  data-bs-toggle="dropdown" aria-expanded="false">
  <img class="rounded-full border-berry border-2" src={user.picture} alt={user.name} loading="lazy" height={40} width={40}/>
</a>
</div>)
}
</div> 
  )
}

export default Navbar
