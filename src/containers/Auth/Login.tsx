import React, { useState } from 'react'
import Logo from '../../assets/images/logo/logo2.png'
import './Login.scss'

const Login = () => {
    const [isShowPassword, setShowPassword] = useState<boolean>(false);
    const handleShowPassword = () => {
        setShowPassword(!isShowPassword);
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
                        <input type='email' className='form-control' placeholder='Enter email' />
                    </div>
                    <div className="login-input ">
                        <div className="label-form">
                            <label>Password</label>
                            <a className="forgot-password" href='#'>Forgot your password?</a>
                        </div>
                        <div className="password-input-form">
                            <input type={isShowPassword ? 'text' : 'password'} className='form-control' placeholder='Enter password' />
                            <i className={isShowPassword ? "far fa-eye" : "far fa-eye-slash"}
                                onClick={() => handleShowPassword()}></i>

                        </div>
                    </div>
                    <div className="form-group text-center">
                        <button className="btn-primary login-btn">Login</button>
                    </div>
                    <div className="account-footer text-center">
                        <p>Don't have an account yet? <a href="auth-register">Register</a></p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login