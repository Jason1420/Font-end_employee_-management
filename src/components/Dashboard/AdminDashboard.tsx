import React from 'react'
import './AdminDashboard.scss'
import chart1 from '../../assets/images/chart/ChartColumn.jpeg'
import chart2 from '../../assets/images/chart/ChartCircle.jpeg'

const AdminDashboard = () => {
    return (
        <div className='dashboard-container'>

            <div className="dashboard-header">
                <div className='page-title'><h3>Welcome Admin!</h3></div>
                <div className='bread-crumb'>Dashboard</div>
            </div>

            <div className="dashboard-content">
                <div className="child-content">
                    <div className="card-body">
                        <div className="card-img"><i className="fa fa-cubes"></i></div>
                        <div className="card-content">
                            <div className="title"><h3>112</h3></div>
                            <div className="content">Project</div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="card-img"><i className="fas fa-dollar-sign"></i></div>
                        <div className="card-content">
                            <div className="title"><h3>44</h3></div>
                            <div className="content">Clients</div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="card-img"><i className="fas fa-gem"></i></div>
                        <div className="card-content">
                            <div className="title"><h3>37</h3></div>
                            <div className="content">Tasks</div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="card-img"><i className="fa fa-user"></i></div>
                        <div className="card-content">
                            <div className="title"><h3>281</h3></div>
                            <div className="content">Employees</div>
                        </div>
                    </div>
                </div>





                <div className="child-content-2">
                    <div className="card-body">
                        <h3>Total Revenue</h3>
                        <img src={chart1} alt="" />
                        <div className='total'></div>
                    </div>
                    <div className="card-body">
                        <h3>Total Revenue</h3>
                        <img src={chart2} alt="" />
                        <div className='total'></div>
                    </div>
                </div>


                <div className="child-content-3">
                    <div className="card-body">
                        <div className="content-1">
                            <div className="left">New Employees</div>
                            <div className="right">+10%</div>
                        </div>
                        <div className="content-2"><h3>10</h3></div>
                        <div className="content-3">
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                        </div>
                        <div className="content-4"><p>Overall Employees 218</p></div>

                    </div>

                    <div className="card-body">
                        <div className="content-1">
                            <div className="left">Earnings</div>
                            <div className="right">+12.5%</div>
                        </div>
                        <div className="content-2"><h3>$1,42,300</h3></div>
                        <div className="content-3">
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                        </div>
                        <div className="content-4"><p>Previous Month <span>$1,15,852</span></p></div>

                    </div>

                    <div className="card-body">
                        <div className="content-1">
                            <div className="left">Expenses</div>
                            <div className="right-red">-2.8%</div>
                        </div>
                        <div className="content-2"><h3>$8,500</h3></div>
                        <div className="content-3">
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                        </div>
                        <div className="content-4"><p>Previous Month <span>$7,500</span></p></div>
                    </div>

                    <div className="card-body">
                        <div className="content-1">
                            <div className="left">Profit</div>
                            <div className="right-red">-75%</div>
                        </div>
                        <div className="content-2"><h3>$1,12,000</h3></div>
                        <div className="content-3">
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                        </div>
                        <div className="content-4"><p>Previous Month <span>$1,42,000</span></p></div>

                    </div>

                </div>
                {/* <div className="child-content"></div>
                <div className="child-content"></div>
                <div className="child-content"></div> */}
            </div>
        </div>
    )
}

export default AdminDashboard