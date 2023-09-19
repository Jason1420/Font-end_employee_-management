import React, { useState } from 'react'
import flags_us from '../../assets/flags/us.png'
import Logo from '../../assets/images/logo/logo.png'
import avatar from '../../assets/images/profiles/avatar-21.jpg'
import flags_es from '../../assets/flags/es.png'
import flags_de from '../../assets/flags/de.png'
import flags_fr from '../../assets/flags/fr.png'
import './Header.scss'
import SidebarMenu from '../SidebarMenu/SidebarMenu'

interface Props {
    isShowSidebar: boolean,
    handleShowSidebar: () => void
}

const Header: React.FC<Props> = ({ isShowSidebar, handleShowSidebar }) => {

    const [isLanguageDrop, setLangDrop] = useState<boolean>(false)
    const [isUserDrop, setUserDrop] = useState<boolean>(false)

    const handleLanguageDrop = () => {
        setLangDrop(!isLanguageDrop)
        setUserDrop(false)
    }
    const handleUser = () => {
        setUserDrop(!isUserDrop)
        setLangDrop(false)
    }

    return (
        <>
            <div className='header row' >
                <div className="col-6 row">
                    <div className={`header-left ${isShowSidebar ? "col-4" : "col-2"}`}>
                        <a href="dashboard" className="logo">
                            <img src={Logo} alt="logo-header" width={isShowSidebar ? 40 : 30} height={isShowSidebar ? 40 : 30} />
                        </a>
                    </div>

                    <div className='toggle-btn col-6'>
                        <a href='#' onClick={() => handleShowSidebar()}><i className="fas fa-bars"></i></a>
                        <div className='title'>Employee Management</div>
                    </div>
                    {/* <div className={`toggle-btn ${isShowSidebar ? 'col-1' : 'col-2'}`}>

                </div> */}
                </div>
                <div className="nav-bar col-6 row">
                    <div className='search-form col-2'>
                        <input className="form-control" type="text" placeholder="Search here" />
                        <i className="fa fa-search"></i>
                    </div>
                    <div className="btn-group col-2">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" id="navbarDropdownMenuLink" role="button" aria-expanded="false" onClick={() => handleLanguageDrop()}>
                                    <img src={flags_us} alt="" height="20" /> <span >English</span>
                                </a>
                                <div className={isLanguageDrop ? "dropdown-menu show" : "dropdown-menu"} aria-labelledby="navbarDropdownMenuLink" >
                                    <a href="#" className="dropdown-item">
                                        <img src={flags_us} alt="" height="16" /> English
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        <img src={flags_fr} alt="" height="16" /> French
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        <img src={flags_es} alt="" height="16" /> Spanish
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        <img src={flags_de} alt="" height="16" /> German
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className='notify col-1'>
                        <i className="far fa-bell "></i>
                    </div>

                    <div className='message col-1'>
                        <i className="far fa-comment-dots"></i>
                    </div>

                    <div className='btn-group col-2'>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" id="navbarDropdownMenuLink" role="button" aria-expanded="false" onClick={() => handleUser()}>
                                    <span className="user-img"><img src={avatar} alt="" /><span className="status-online"></span></span>
                                    <span >Admin</span>
                                </a>
                                <div className={isUserDrop ? "dropdown-menu show-user" : "dropdown-menu"} aria-labelledby="navbarDropdownMenuLink" >
                                    <a href="#" className="dropdown-item">
                                        My profile
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        Setting
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        Log out
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Header