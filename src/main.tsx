import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './hooks/useTheme.tsx'

// HashRouter (URLs like /#/projects/slug) instead of BrowserRouter: GitHub
// Pages serves static files only, so a plain path like /projects/slug would
// 404 on refresh or direct link without extra server config. Hash routing
// works everywhere with zero config, on the project URL and the custom
// domain alike.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </StrictMode>,
)
