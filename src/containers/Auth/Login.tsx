import React, { useState } from 'react'
import Logo from '../../assets/images/logo/logo2.png'
import './Login.scss'
import { NavLink } from 'react-router-dom';
import { PathAuth } from '../../routes/Path';
import axios from 'axios'
const Login = () => {
    // logic for show password button
    const [isShowPassword, setShowPassword] = useState<boolean>(false);
    const handleShowPassword = () => {
        setShowPassword(!isShowPassword);
    }
    // logic for login
    const [username, setUsername] = useState<string | undefined>("")
    const [password, setPassword] = useState<string | undefined>("")
    const [accessToken, setAccessToken] = useState<string | undefined>("")
    const [headers, setHeaders] = useState<{}>()


    const handleLogin = async () => {
        try {
            const loginUrl = `http://localhost:8888/login`
            const result = await axios.post(loginUrl, {
                username: username,
                password: password
            });
            if (result && result.data && result.data.data && result.data.data.accessToken) {
                setAccessToken(result.data.data.accessToken)
                setHeaders({
                    Authorization: `Bearer ${result.data.data.accessToken}`,
                })
            }
            console.log(result.data.data.accessToken)
            console.log(accessToken)
            console.log(headers)
        } catch (error) {
            alert(`Wrong username or password!!!`)
        }

    }
    const handleGetApiViaAccessToken = async () => {
        console.log(headers)
        try {
            const getUrl = `http://localhost:8888/api/v1/employee/1`
            const result = await axios.get(getUrl, { headers });
            console.log(result)

        } catch (error) {
            alert(`Something Wrong!!!`)
        }
    }
    return (


        <div className="login-background">
            <div className="login-container">
                <div className="login-logo">
                    <img src={Logo} alt="logo-login" />
                </div>

                <div className="login-box">
                    <div className="login-title">Login</div>
                    <div className="login-subtitle">Access our dashboard</div>
                    <div className="login-input">
                        <label >Email</label>
                        <input type='email' className='form-control' placeholder='Enter email'
                            onChange={(event) => setUsername(event.target.value)} />
                    </div>
                    <div className="login-input ">
                        <div className="label-form">
                            <label>Password</label>
                            <NavLink className="forgot-password" to={PathAuth.FORGOT_PASSWORD}>Forgot your password?</NavLink>
                        </div>
                        <div className="password-input-form">
                            <input type={isShowPassword ? 'text' : 'password'} className='form-control' placeholder='Enter password'
                                onChange={(event) => setPassword(event.target.value)} />
                            <i className={isShowPassword ? "far fa-eye" : "far fa-eye-slash"}
                                onClick={() => handleShowPassword()}></i>

                        </div>
                    </div>
                    <div className="form-group text-center">
                        <button className="btn-primary login-btn"
                            onClick={() => handleLogin()}>Login</button>
                        <button className="btn-primary login-btn"
                            onClick={() => handleGetApiViaAccessToken()}>GetAPI</button>
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