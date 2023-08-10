import { Auth0Provider } from '@auth0/auth0-react';
export const Auth0ProviderConfig = {
    domain:"dev-koz3ivhq2dj0py06.us.auth0.com",
    clientId:"MnWSxLU8iGNayrrqD8LR5EJWqPxw0twz",
    redirectUri:
    typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000, https://stripe-two-sigma.vercel.app/' // Fallback for server-side rendering
};

  export default Auth0ProviderConfig;