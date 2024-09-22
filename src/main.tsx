import React from 'react'
import ReactDOM from 'react-dom/client'

import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';

import App from './App.tsx'
import { theme } from './styles/theme.ts'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <CssVarsProvider theme={theme}>
            <CssBaseline />
            <App />
        </CssVarsProvider>
    </React.StrictMode>
)

