import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { store } from './app/store/store-creation.ts'

import { Provider } from 'react-redux'
import FxErrorBoundary  from './app/core/error-handling/error-boundary';
import { injectStore } from './inject-store.ts'
import App from './App.tsx'

injectStore(store)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <FxErrorBoundary>
        <App />
      </FxErrorBoundary>
    </Provider>
  </React.StrictMode>,
)
