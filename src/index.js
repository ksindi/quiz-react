import React from 'react';
import { render } from 'react-dom';
import App from './Components/App';
import { ZeitProvider, CssBaseline } from '@zeit-ui/react';

render(
  <ZeitProvider>
    <CssBaseline />
    <App />
  </ZeitProvider>,
  document.getElementById('root')
);
