import React, { useEffect, useState } from 'react'
import SidebarMenu from '../SidebarMenu/SidebarMenu'
import './PageContent.scss'
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from '../../components/Dashboard/AdminDashboard';
import { PathHeader, PathSidebar } from '../../routes/Path';
import EmployeeDashboard from '../../components/Dashboard/EmployeeDashboard';
import MyProfile from '../../components/User/MyProfile';
import AllEmployee from '../../components/Employee/AllEmployee';
import { CustomScrollbars } from '../../components/Helper';

interface Props {
    isShowSidebar: boolean
}
const PageContent: React.FC<Props> = (props) => {
    const [smoothSidebar, setSmoothSidebar] = useState<string>("")
    useEffect(() => {
        if (props.isShowSidebar) {
            setSmoothSidebar("")
        } else {
            setTimeout(() => setSmoothSidebar("hide-side-bar"), 300)
        }
    }, [props.isShowSidebar])
    return (
        <div className="page-container">
            <div className={`page-sidebar ${props.isShowSidebar ? "" : smoothSidebar}`}>
                <SidebarMenu isShowSidebar={props.isShowSidebar} />
            </div>

            <div className={props.isShowSidebar ? "page-content" : "page-content-2"} >
                <CustomScrollbars style={{ height: "100%  ", width: "100%" }}>
                    <Routes>
                        <Route path={PathSidebar.DASHBOARD} element={<AdminDashboard />} />
                        <Route path={PathSidebar.EMPLOYEE_DASHBOARD} element={<EmployeeDashboard />} />
                        <Route path={PathSidebar.ALL_EMPLOYEES} element={<AllEmployee />} />
                        <Route path={PathHeader.PROFILE + "/*"} element={<MyProfile />} />
                    </Routes>
                </CustomScrollbars>
            </div>
        </div>
    )
}

export default PageContent