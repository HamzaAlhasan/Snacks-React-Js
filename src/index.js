import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from "@clerk/clerk-react";
import {Provider} from 'react-redux';
import { store } from './Redux/sotre';


const root = ReactDOM.createRoot(document.getElementById('root'));
if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
console.log(clerkPubKey);

root.render(
   <Provider store={store}>
   <ClerkProvider publishableKey={clerkPubKey}>
  <BrowserRouter>
     <React.StrictMode>
        <App />
     </React.StrictMode>
  </BrowserRouter>
  </ClerkProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
