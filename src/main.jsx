import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Import Provider component from react-redux to enable all components to access Redux store
import { Provider } from 'react-redux'
// Import the Redux store that holds the application's state using CartSlice reducer
import store from './store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap App component with Provider and pass Redux store as prop */}
    {/* This allows all components in the app to access and interact with global state */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
