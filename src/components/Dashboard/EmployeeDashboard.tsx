import React from 'react'
import './EmployeeDashboard.scss'
import avatar from '../../assets/images/profiles/avatar-02.jpg'

const EmployeeDashboard = () => {
    return (
        <div className='dashboard-container-employee'>
            <div className="dashboard-header">
                <img src={avatar} alt="" className="header-img" />
                <div className="header-content">
                    <h3>Welcome, John Doe</h3>
                    <p>Monday, 20 May 2019</p>
                </div>
            </div>

            <div className="dashboard-content">

                <div className="dashboard-left">
                    <div className="dash-selection">
                        <div className="title">
                            <h1>Today</h1>
                        </div>
                        <div className="card">
                            <div className='card-icon-content active'>
                                <div className="card-icon">
                                    <i className="fas fa-hourglass-half"></i>
                                </div>
                                <div className="card-content ">
                                    Richard Miles is off sick today
                                </div>
                            </div>
                            <div className="card-avatar">
                                <img src={avatar} alt="" className="card-img" />
                            </div>
                        </div>

                        <div className="card">
                            <div className='card-icon-content'>
                                <div className="card-icon">
                                    <i className="fa fa-suitcase"></i>
                                </div>
                                <div className="card-content">
                                    You are away today
                                </div>
                            </div>
                            <div className="card-avatar">
                                <img src={avatar} alt="" className="card-img" />
                            </div>
                        </div>

                        <div className="card">
                            <div className='card-icon-content'>
                                <div className="card-icon">
                                    <i className="fa fa-building"></i>
                                </div>
                                <div className="card-content">
                                    You are working from home today
                                </div>
                            </div>
                            <div className="card-avatar">
                                <img src={avatar} alt="" className="card-img" />
                            </div>
                        </div>
                    </div>
                    <div className="dash-selection">
                        <div className="title">
                            <h1>TOMORROW
                            </h1>
                        </div>
                        <div className="card">
                            <div className='card-icon-content'>
                                <div className="card-icon">
                                    <i className="fa fa-suitcase"></i>
                                </div>
                                <div className="card-content">
                                    2 people will be away tomorrow
                                </div>
                            </div>
                            <div className="card-avatar">
                                <img src={avatar} alt="" className="card-img" />
                            </div>
                        </div>

                    </div>


                    <div className="dash-selection">
                        <div className="title">
                            <h1>NEXT SEVEN DAYS</h1>
                        </div>
                        <div className="card">
                            <div className='card-icon-content'>
                                <div className="card-icon">
                                    <i className="fa fa-suitcase"></i>
                                </div>
                                <div className="card-content">
                                    2 people are going to be away
                                </div>
                            </div>
                            <div className="card-avatar">
                                <img src={avatar} alt="" className="card-img" />
                            </div>
                        </div>

                        <div className="card">
                            <div className='card-icon-content'>
                                <div className="card-icon">
                                    <i className="fa fa-user-plus"></i>
                                </div>
                                <div className="card-content">
                                    Your first day is going to be on Thursday
                                </div>
                            </div>
                            <div className="card-avatar">
                                <img src={avatar} alt="" className="card-img" />
                            </div>
                        </div>

                        <div className="card">
                            <div className='card-icon-content'>
                                <div className="card-icon">
                                    <i className="fa fa-calendar"></i>
                                </div>
                                <div className="card-content">
                                    It's Spring Bank Holiday on Monday
                                </div>
                            </div>
                            <div className="card-avatar">
                                <img src={avatar} alt="" className="card-img" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dashboard-right">
                    <div className="dash-selection">
                        <div className="title">
                            <h5>PROJECT</h5>
                        </div>
                        <div className="card">
                            <div className="card-top">
                                <div>
                                    <h4>71</h4>
                                    <p>TOTAL TASKS</p>
                                </div>
                                <div>
                                    <h4>14</h4>
                                    <p>PENDING TASKS</p>
                                </div>
                            </div>
                            <div className="card-bottom">
                                <h4>2</h4>
                                <p>Total Projects</p>
                            </div>
                        </div>

                    </div>

                    <div className="dash-selection">
                        <div className="title">
                            <h5>YOUR LEAVE
                            </h5>
                        </div>
                        <div className="card">
                            <div className="card-top">
                                <div >
                                    <h4>4.5</h4>
                                    <p>LEAVE TAKEN</p>
                                </div>
                                <div >
                                    <h4>12</h4>
                                    <p>REMAINING</p>
                                </div>
                            </div>
                            <div className="card-bottom">
                                <button>Apply Leave</button>
                            </div>

                        </div>

                    </div>

                    <div className="dash-selection">
                        <div className="title">
                            <h5>YOUR TIME OFF ALLOWANCE</h5>
                        </div>
                        <div className="card">
                            <div className="card-top">
                                <div >
                                    <h4>5.0 Hours</h4>
                                    <p>APPROVED</p>
                                </div>
                                <div >
                                    <h4>15 Hours</h4>
                                    <p>REMAINING</p>
                                </div>
                            </div>
                            <div className="card-bottom">
                                <button>Apply Time Off</button>
                            </div>
                        </div>

                    </div>

                    <div className="dash-selection">
                        <div className="title">
                            <h5>UPCOMING HOLIDAY</h5>
                        </div>
                        <div className="card">
                            <div className="card-top">
                                <h4>Mon 20 May 2019 - Ramzan</h4>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeDashboard