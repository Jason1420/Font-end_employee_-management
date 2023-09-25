import React from 'react';
import './App.scss';
import Header from './containers/Header/Header';
import { useState } from 'react';
import PageContent from './containers/Page/PageContent';
import { Routes, Route } from 'react-router-dom';
function App() {

  const [isShowSidebar, setShowSidebar] = useState<boolean>(true)
  const handleShowSidebar = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    setShowSidebar(!isShowSidebar)
    console.log(isShowSidebar)
  }

  return (
    <div className="app-container">
      <Routes>
        <Route />
      </Routes>
      <div className='app-header'>
        <Header isShowSidebar={isShowSidebar} handleShowSidebar={handleShowSidebar} />
      </div>

      <div className="app-content">
        <PageContent isShowSidebar={isShowSidebar} />
      </div>
    </div>
  );
}

export default App;
