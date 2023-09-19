import React, { useState } from 'react'
import Logo from '../../assets/images/logo/logo2.png'
import './ResetPassword.scss'

const ResetPassword = () => {
    return (

        <div className="reset-password-background">
            <div className="reset-password-container">
                <div className="reset-password-logo">
                    <img src={Logo} alt="logo-reset-password" />
                </div>

                <div className="reset-password-box">
                    <div className="reset-password-title">Login</div>
                    <div className="reset-password-subtitle">Enter your email to get a password reset link</div>
                    <div className="reset-password-input">
                        <label >Email</label>
                        <input type='email' className='form-control' placeholder='Enter email' />
                    </div>
                    <div className="form-group text-center">
                        <button className="btn-primary reset-password-btn">Reset Password</button>
                    </div>
                    <div className="account-footer text-center">
                        <p>Remember your password? <a href="auth-reset-password">Login</a></p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ResetPassword