import React, { useState } from 'react'
import './SidebarMenu.scss'
import { Console } from 'console'
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
                                                <a href="#">Admin Dashboard
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">Employee Dashboard</a>
                                            </li>

                                        </ul>
                                    </div>
                                </li>
                                <li className={isShow[1] ? "sidebar-dropdown active" : "sidebar-dropdown"}>
                                    <a href="#"
                                        onClick={(event) => handleShowUL(event, 1)}>
                                        <i className="fa fa-shopping-cart"
                                        />
                                        <span>Apps</span>
                                    </a>
                                    <div className={isShow[1] ? "sidebar-submenu-active" : "sidebar-submenu"}>
                                        <ul>
                                            <li>
                                                <a href="#">Chat
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">Calls</a>
                                            </li>
                                            <li>
                                                <a href="#">File Manager</a>
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
                                                <a href="#">All Employees</a>
                                            </li>
                                            <li>
                                                <a href="#">Attendance(Admin)</a>
                                            </li>
                                            <li>
                                                <a href="#">Attendance(Employee)</a>
                                            </li>
                                            <li>
                                                <a href="#">Department</a>
                                            </li>
                                            <li>
                                                <a href="#">Designations</a>
                                            </li>
                                            <li>
                                                <a href="#">Timesheet</a>
                                            </li>
                                            <li>
                                                <a href="#">Shift & Schedule</a>
                                            </li>
                                            <li>
                                                <a href="#">Overtime</a>
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
                                                <a href="#">Project</a>
                                            </li>
                                            <li>
                                                <a href="#">Tasks</a>
                                            </li>
                                            <li>
                                                <a href="#">Task Board</a>
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
                                                <a href="#">Employee Report</a>
                                            </li>
                                            <li>
                                                <a href="#">Attendance Report</a>
                                            </li>
                                            <li>
                                                <a href="#">Leave Report</a>
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