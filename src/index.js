import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-xnx6410tbdhu818s.us.auth0.com"
    clientId="LeSjalOBHrKVQHDEoHMcrSSFZm3VvrC3"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
 
    
  
);
