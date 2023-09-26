import React, { useState } from 'react'
import Logo from '../../assets/images/logo/logo2.png'
import './Login.scss'
import { NavLink, useNavigate } from 'react-router-dom';
import { PathAuth, PathSidebar } from '../../routes/Path';
import axios, { Axios, AxiosError } from 'axios'
import { AuthenticateCode, clientUrl, serverUrl } from '../../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { isLogged, refreshed } from '../../store/reducers/authReducer';
import { RootState } from '../../store/store';
import jwtDecode from 'jwt-decode';

const Login = () => {
    // logic for show password button
    const [isShowPassword, setShowPassword] = useState<boolean>(false);
    const handleShowPassword = () => {
        setShowPassword(!isShowPassword);
    }
    // logic for login
    const [username, setUsername] = useState<string | undefined>("")
    const [password, setPassword] = useState<string | undefined>("")
    const [headers, setHeaders] = useState<{}>()
    const [loginErrorCode, setLoginErrorCode] = useState<number>(0) // 0:no error, 1 wrong password, 2 input blank, 3 username not exist
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const user = useSelector((state: RootState) => state.auth)

    const handleLogin = async () => {
        setPassword("")
        try {
            const loginUrl = serverUrl + PathAuth.LOG_IN
            console.log(loginUrl)
            const result = await axios.post(loginUrl, {
                username: username,
                password: password
            }, {
                withCredentials: true
            });

            if (result && result.data && result.data.data && result.data.data.accessToken) {
                setHeaders({
                    Authorization: `Bearer ${result.data.data.accessToken}`,
                })
            }
            setLoginErrorCode(0)
            navigate(PathSidebar.DASHBOARD)
            dispatch(isLogged(result.data.data))
        } catch (error: any) {
            if (error.response.data.message === AuthenticateCode.WRONG_PASSWORD) {
                setLoginErrorCode(1)
            } else if (error.response.data.message === AuthenticateCode.NO_INPUT) {
                setLoginErrorCode(2)
            } else {
                /* Username not exist*/
                setLoginErrorCode(3)
            }
        }
    }
    // refresh token function
    const axiosJWT = axios.create();

    const refreshToken = async () => {
        try {
            const res = await axios.post("http://localhost:8888/refreshToken", null, {
                withCredentials: true
            })
            return res.data
        } catch (error) {
            console.log(error)
        }
    }
    // custom axios instance to refresh token when access token expired
    axiosJWT.interceptors.request.use(async (config) => {
        let date = new Date();
        const decodedToken: any = jwtDecode(user.accessToken);
        if (decodedToken.exp <= date.getTime() / 1000) {
            const data = await refreshToken()
            const refreshUser = { ...user, accessToken: data.data.accessToken }
            setHeaders({
                Authorization: `Bearer ${refreshUser.accessToken}`,
            })
            dispatch(refreshed(refreshUser))
            config.headers['Authorization'] = `Bearer ${refreshUser.accessToken}`;
        }
        return config;
    },
        (error) => {
            return Promise.reject(error);
        });

    // this function was used to test api axios
    const handleGetApiViaAccessToken = async () => {
        console.log("check header : ", headers)
        try {
            const getUrl = `http://localhost:8888/api/v1/employee/1`
            const result = await axiosJWT.get(getUrl, { headers },);
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="login-background" >
            <div className="login-container">
                <div className="login-logo">
                    <img src={Logo} alt="logo-login" />
                </div>
                <div className="login-box">
                    <div className="login-title">Login</div>
                    <div className="login-subtitle">Access our dashboard</div>
                    <div className="login-input">
                        <label >Username</label>
                        {loginErrorCode === 2 && <p className='login-error-response'>*Please enter username</p>}
                        {loginErrorCode === 3 && <p className='login-error-response'>*Username not exist</p>}
                        <input type='text' tabIndex={1} className='form-control' placeholder='Enter username'
                            value={username} onChange={(event) => setUsername(event.target.value)} />
                    </div>
                    <div className="login-input ">
                        <div className="label-form">
                            <label>Password</label>
                            {loginErrorCode === 1 && <p className='login-error-response'>*Incorrect password</p>}
                            <NavLink tabIndex={4} className="forgot-password" to={PathAuth.FORGOT_PASSWORD}>Forgot your password?</NavLink>
                        </div>
                        <div className="password-input-form">
                            <input type={isShowPassword ? 'text' : 'password'} className='form-control' placeholder='Enter password'
                                tabIndex={2} value={password} onChange={(event) => setPassword(event.target.value)}
                                onKeyUp={(event) => {
                                    if (event.key === "Enter") {
                                        handleLogin();
                                    }

                                }}
                            />
                            <i className={isShowPassword ? "far fa-eye" : "far fa-eye-slash"}
                                onClick={() => handleShowPassword()}
                            ></i>
                        </div>
                    </div>
                    <div className="form-group text-center">
                        <button className="btn-primary login-btn"
                            tabIndex={3} onClick={() => handleLogin()}>Login</button>
                    </div>
                    <div className="account-footer text-center">
                        <p>Don't have an account yet? <NavLink to={PathAuth.REGISTER}>Register</NavLink></p>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Login