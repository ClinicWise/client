import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import AppRoutes from './routes/AppRoutes.tsx';
import { ChakraProvider } from '@chakra-ui/react';
import { Auth0Provider } from '@auth0/auth0-react';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import { Provider } from 'react-redux';
import store from './store/index.ts';
import './i18n';
import history from './utils/history.ts';
import { getAuthConfig } from './configs/auth-config.ts';

const onRedirectCallback = (appState: any) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

const config = getAuthConfig();

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  onRedirectCallback,
  authorizationParams: {
    redirect_uri: window.location.origin + '/dashboard',
  },
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider {...providerConfig}>
      <Provider store={store}>
        <ChakraProvider>
          <AppRoutes />
          <Tooltip id="my-tooltip" />
        </ChakraProvider>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);
