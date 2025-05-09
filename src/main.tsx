import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import configureStore from './App/providers/StoreProvider/config/store.ts'
import App from './App/ui/App.tsx'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={configureStore}>
      <App />
    </Provider>
  </StrictMode>,
)
