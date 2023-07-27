import React from 'react'
import router from './routes'
import { RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { CssBaseline, GlobalStyles } from '@mui/material';
import AuthContext from './context/auth-context';

const secondary = "#463B5F";

let darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#F9C33A',
    },
  },
});

darkTheme = responsiveFontSizes(darkTheme);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthContext.Provider value={null}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <GlobalStyles
            styles={{
              body: { backgroundColor: secondary, color: '#fff' },
            }}
          />
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthContext.Provider>
  </React.StrictMode>,
)
