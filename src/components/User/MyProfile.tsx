import React from 'react'
import './MyProfile.scss'
import avatar from '../../assets/images/profiles/avatar-07.jpg';
import { NavLink } from 'react-router-dom';
const MyProfile = () => {
    return (
        <div className='dashboard-profile-container'>
            <div className="dashboard-header">
                <div className='page-title'><h3>Welcome Admin!</h3></div>
                <div className='bread-crumb'>
                    <p className='breadcrumb-history'>Dashboard </p>
                    <p>/ Profile</p></div>
            </div>

            <div className="dashboard-general">
                <div className="profile-view">
                    <div className="profile-image">
                        <img src={avatar} alt="" />
                    </div>
                    <div className="profile-info">
                        <h3>John Doe</h3>
                        <h6>UI/UX Design Team</h6>
                        <small>Web Designer</small>
                        <div className="staff-id">Employee ID : FT-0001</div>
                        <h6>Date of Join : 1st Jan 2013</h6>
                    </div>
                </div>
                <div className="view-tab">
                    <div className="personal-info">
                        <div className="field">
                            <div className="title">
                                Phone:
                            </div>
                            <div className="value">
                                <a>
                                    johndoe@example.com</a>
                            </div>
                        </div>

                        <div className="field">
                            <div className="title">
                                Email:
                            </div>
                            <div className="value">
                                <a>9876543210</a>
                            </div>
                        </div>

                        <div className="field">
                            <div className="title">
                                Birthday:
                            </div>
                            <div className="value">
                                24th July
                            </div>
                        </div>

                        <div className="field">
                            <div className="title">
                                Address:
                            </div>
                            <div className="value">
                                1861 Bayonne Ave, Manchester Township, NJ, 08759
                            </div>
                        </div>

                        <div className="field">
                            <div className="title">
                                Gender:
                            </div>
                            <div className="value">
                                Male
                            </div>
                        </div>

                        <div className="field">
                            <div className="title">
                                Reports to:
                            </div>
                            <div className="value">
                                <a>Jeffery Lalor</a>
                            </div>
                        </div>
                    </div>
                    <div className="tab">
                        <button>Profile</button>
                        <button>Project</button>
                        <button>Bank & Statutory (Admin Only)</button>
                    </div>
                </div>

            </div>

            <div className="dashboard-content">

            </div>
        </div>
    )
}

export default MyProfile