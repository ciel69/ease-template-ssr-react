import React from 'react';
import { hydrate } from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { green, red } from 'material-ui/colors';

import Main from '../layouts/Main';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: green,
    accent: red,
    type: 'light',
  },
});

/**
 * Renders a react component into the #react-root div container.
 * Since react 16, the `hydrate` method is used instead of `render` when dealing
 * with server side rendering.
 *
 * @param Component React component that should be rendered
 */
const renderApp = Component => {
  hydrate(
    <MuiThemeProvider theme={theme}>
      <Component />
    </MuiThemeProvider>,
    document.getElementById('react-root')
  );
};

renderApp(Main);

/**
 * This script provides hot module reloading in development mode.
 */
if (module.hot && process.env.NODE_ENV === 'development') {
  module.hot.accept('../layouts/Main', () => {
    const Main = require('../layouts/Main').default;
    renderApp(Main);
  });
}
