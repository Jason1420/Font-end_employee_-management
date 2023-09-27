import './App.scss';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { PathAuth } from './routes/Path';
import Login from './containers/Auth/Login';
import Register from './containers/Auth/Register';
import ResetPassword from './containers/Auth/ResetPassword';
import MainPage from './MainPage';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';


const App = () => {
  const user = useSelector((state: RootState) => state.auth)
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          {
            !user.logged ?
              <>
                <Route path={PathAuth.LOG_IN} element={<Login />} />
                <Route path={PathAuth.REGISTER} element={<Register />} />
                <Route path={PathAuth.FORGOT_PASSWORD} element={<ResetPassword />} />

                <Route path='/*' element={<Navigate to={PathAuth.LOG_IN} />} />
              </>
              :
              <Route path='/*' element={<MainPage />} />
          }
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
