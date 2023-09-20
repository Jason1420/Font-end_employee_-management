import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Login from './containers/Auth/Login';
import { PathAuth } from './routes/Path';
import Register from './containers/Auth/Register';
import ResetPassword from './containers/Auth/ResetPassword';


// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path={PathAuth.LOG_IN} element={<Login />} />
        <Route path={PathAuth.REGISTER} element={<Register />} />
        <Route path={PathAuth.FORGOT_PASSWORD} element={<ResetPassword />} />
        <Route path='/*' element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
