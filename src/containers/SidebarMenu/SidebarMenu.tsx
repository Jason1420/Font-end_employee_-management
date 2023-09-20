import React, { useState } from 'react'
import './SidebarMenu.scss'
import { Console } from 'console'
import { NavLink } from 'react-router-dom'
import { PathSidebar } from '../../routes/Path'

interface Props {
    isShowSidebar: boolean
}
type Event = React.MouseEvent<HTMLAnchorElement, MouseEvent>;

const SidebarMenu: React.FC<Props> = (props) => {

    const [isShow, setShow] = useState<boolean[]>(Array(5).fill(false))
    const [isInit, setInit] = useState<boolean>(true)
    const handleShowUL = (event: Event, index: number) => {
        event.preventDefault();
        let updateStateShow = [...isShow];
        updateStateShow[index] = !updateStateShow[index]
        setShow([...updateStateShow]);
        setInit(false)
    }
    console.log("check props", props.isShowSidebar)
    return (
        <div className='sidebar-menu-container'>
            <div className={`page-wrapper chiller-theme toggled ${props.isShowSidebar ? "sidebar-show" : "sidebar-hide"}`}  >
                <nav id="sidebar" className={`sidebar-wrapper `}>
                    <div className="sidebar-content">
                        <div className="sidebar-menu">
                            <ul>
                                <li className="header-menu">
                                    <span>General</span>
                                </li>
                                <li className={isShow[0] ? "sidebar-dropdown active" : "sidebar-dropdown"} >
                                    <a href="#"
                                        onClick={(event) => handleShowUL(event, 0)}>
                                        <i className="fa fa-tachometer-alt" />
                                        <span>Dashboard</span>

                                    </a>
                                    <div className={isShow[0] ? "sidebar-submenu-active" : "sidebar-submenu"}>
                                        <ul>
                                            <li>
                                                <NavLink to={PathSidebar.DASHBOARD}>
                                                    Admin Dashboard
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={PathSidebar.EMPLOYEE_DASHBOARD}>Employee Dashboard</NavLink>
                                            </li>

                                        </ul>
                                    </div>
                                </li>
                                <li className={isShow[1] ? "sidebar-dropdown active" : "sidebar-dropdown"}>
                                    <a href="#"
                                        onClick={(event) => handleShowUL(event, 1)}>
                                        <i className="fab fa-creative-commons-nd"></i>
                                        <span>Apps</span>
                                    </a>
                                    <div className={isShow[1] ? "sidebar-submenu-active" : "sidebar-submenu"}>
                                        <ul>
                                            <li>
                                                <NavLink to={PathSidebar.CHAT}>Chat
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={PathSidebar.CALLS}>Calls</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={PathSidebar.FILE_MANAGER}>File Manager</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="header-menu">
                                    <span>Employee</span>
                                </li>
                                <li className={isShow[2] ? "sidebar-dropdown active" : "sidebar-dropdown"}>
                                    <a href="#"
                                        onClick={(event) => handleShowUL(event, 2)}>
                                        <i className="fas fa-user"></i>
                                        <span>Employee</span>
                                    </a>
                                    <div className={isShow[2] ? "sidebar-submenu-active" : "sidebar-submenu"}>
                                        <ul>
                                            <li>
                                                <NavLink to={PathSidebar.ALL_EMPLOYEES}>All Employees</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={PathSidebar.ATTENDANCE_ADMIN}>Attendance(Admin)</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={PathSidebar.ATTENDANCE_EMPLOYEE}>Attendance(Employee)</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={PathSidebar.DEPARTMENT}>Department</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={PathSidebar.DESIGNATIONS}>Designations</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={PathSidebar.TIME_SHEET}>Timesheet</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={PathSidebar.SHIFT_SCHEDULE}>Shift & Schedule</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={PathSidebar.OVERTIME}>Overtime</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className={isShow[3] ? "sidebar-dropdown active" : "sidebar-dropdown"}>
                                    <a href="#"
                                        onClick={(event) => handleShowUL(event, 3)}>
                                        <i className="fa fa-rocket"></i>
                                        <span>Projects</span>
                                    </a>
                                    <div className={isShow[3] ? "sidebar-submenu-active" : "sidebar-submenu"}>
                                        <ul>
                                            <li>
                                                <NavLink to={PathSidebar.PROJECT}>Project</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={PathSidebar.TASKS}>Tasks</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={PathSidebar.TASK_BOARD}>Task Board</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="header-menu">
                                    <span>HR</span>
                                </li>
                                <li className={isShow[4] ? "sidebar-dropdown active" : "sidebar-dropdown"}>
                                    <a href="#"
                                        onClick={(event) => handleShowUL(event, 4)}>
                                        <i className="fas fa-chart-pie"></i>
                                        <span>Report</span>
                                    </a>
                                    <div className={isShow[4] ? "sidebar-submenu-active" : "sidebar-submenu"}>
                                        <ul>
                                            <li>
                                                <NavLink to={PathSidebar.EMPLOYEE_REPORT}>Employee Report</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={PathSidebar.ATTENDANCE_REPORT}>Attendance Report</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={PathSidebar.LEAVE_REPORT}>Leave Report</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* sidebar-menu  */}
                    </div>

                </nav>
                {/* sidebar-wrapper  */}</div>

        </div >

    )
}

export default SidebarMenu