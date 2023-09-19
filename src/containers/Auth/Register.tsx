import React, { useState } from 'react'
import Logo from '../../assets/images/logo/logo2.png'
import './Register.scss'
const Register = () => {
    const [isShowPassword, setShowPassword] = useState<boolean>(false);
    const handleShowPassword = () => {
        setShowPassword(!isShowPassword);
    }
    return (
        <div className="register-background">
            <div className="register-container">
                <div className="register-logo">
                    <img src={Logo} alt="logo-register" />
                </div>

                <div className="register-box">
                    <div className="register-title">Register</div>
                    <div className="register-subtitle">Access our dashboard</div>
                    <div className="register-input">
                        <label >Email</label>
                        <input type='email' className='form-control' placeholder='Enter email' />
                    </div>
                    <div className="register-input ">
                        <div className="label-form">
                            <label>Password</label>
                        </div>
                        <div className="password-input-form">
                            <input type={isShowPassword ? 'text' : 'password'} className='form-control' placeholder='Enter password' />
                            <i className={isShowPassword ? "far fa-eye" : "far fa-eye-slash"}
                                onClick={() => handleShowPassword()}></i>

                        </div>
                    </div>
                    <div className="register-input ">
                        <div className="label-form">
                            <label>Repeat Password</label>
                        </div>
                        <div className="password-input-form">
                            <input type={isShowPassword ? 'text' : 'password'} className='form-control' placeholder='Enter password' />
                            <i className={isShowPassword ? "far fa-eye" : "far fa-eye-slash"}
                                onClick={() => handleShowPassword()}></i>

                        </div>
                    </div>
                    <div className="form-group text-center">
                        <button className="btn-primary register-btn">Register</button>
                    </div>
                    <div className="account-footer text-center">
                        <p>Already have an account? <a href="auth-register">Login</a></p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Register