import React from 'react';
import './MainPage.scss';
import Header from './containers/Header/Header';
import { useState } from 'react';
import PageContent from './containers/Page/PageContent';
import { Routes, Route } from 'react-router-dom';



const MainPage = () => {

    const [isShowSidebar, setShowSidebar] = useState<boolean>(true)
    const handleShowSidebar = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        setShowSidebar(!isShowSidebar)
    }
    return (
        <div className="main-page-container">
            <Routes>
                <Route />
            </Routes>
            <div className='main-page-header'>
                <Header isShowSidebar={isShowSidebar} handleShowSidebar={handleShowSidebar} />
            </div>

            <div className="main-page-content">
                <PageContent isShowSidebar={isShowSidebar} />
            </div>
        </div>
    );
}

export default MainPage;