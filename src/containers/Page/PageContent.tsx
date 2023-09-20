import React from 'react'
import SidebarMenu from '../SidebarMenu/SidebarMenu'
import './PageContent.scss'
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from '../../components/Dashboard/AdminDashboard';
import { PathSidebar } from '../../routes/Path';
import EmployeeDashboard from '../../components/Dashboard/EmployeeDashboard';

interface Props {
    isShowSidebar: boolean
}
const PageContent: React.FC<Props> = (props) => {

    return (
        <div className="page-container">
            <div className="page-sidebar">
                <SidebarMenu isShowSidebar={props.isShowSidebar} />
            </div>

            <div className={props.isShowSidebar ? "page-content" : "page-content-2"} >
                <Routes>
                    <Route path={PathSidebar.DASHBOARD} element={<AdminDashboard />} />
                    <Route path={PathSidebar.EMPLOYEE_DASHBOARD} element={<EmployeeDashboard />} />
                </Routes>
            </div>
        </div>
    )
}

export default PageContent