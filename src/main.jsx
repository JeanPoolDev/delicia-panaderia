import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRouter } from './router/AppRouter'

import './index.css'
import { BrowserRouter } from 'react-router'
import { PanProvider } from './panaderia/context'
import { Provider } from 'react-redux'
import { store } from './store/store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PanProvider>
          <AppRouter />
        </PanProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
