import '../styles/globals.css'

import { Auth0Provider } from '@auth0/auth0-react';
import Auth0ProviderConfig from '../auth0';

function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider {...Auth0ProviderConfig}>
      <Component {...pageProps} />
    </Auth0Provider>
  );
}

export default MyApp;

