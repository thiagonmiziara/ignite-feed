import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { CommentProvider } from './components/hooks/useComments'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CommentProvider>
      <App />
    </CommentProvider>
  </React.StrictMode>
)
