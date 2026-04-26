import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import theme from './theme/theme.js';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { ConvexProvider, ConvexReactClient } from 'convex/react';
const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <ConvexProvider client={convex}>
          <App />
        </ConvexProvider>
      </CssBaseline>
    </ThemeProvider>
  </Provider>
);
