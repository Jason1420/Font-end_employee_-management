import React, { useState } from 'react'
import flags_us from '../../assets/flags/us.png'
import Logo from '../../assets/images/logo/logo.png'
import avatar from '../../assets/images/profiles/avatar-21.jpg'
import flags_es from '../../assets/flags/es.png'
import flags_de from '../../assets/flags/de.png'
import flags_fr from '../../assets/flags/fr.png'
import './Header.scss'
import { Link, useNavigate } from 'react-router-dom'
import { PathAuth, PathHeader } from '../../routes/Path'
import { AxiosInstance } from '../../store/AxiosInstance'
import { useDispatch, useSelector } from 'react-redux'
import { isLogout } from '../../store/reducers/authReducer'
import { RootState } from '../../store/store'

interface Props {
    isShowSidebar: boolean,
    handleShowSidebar: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}

const Header: React.FC<Props> = ({ isShowSidebar, handleShowSidebar }) => {

    const [isLanguageDrop, setLangDrop] = useState<boolean>(false)
    const [isUserDrop, setUserDrop] = useState<boolean>(false)

    const handleLanguageDrop = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        setLangDrop(!isLanguageDrop)
        setUserDrop(false)
    }
    const handleUser = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        setUserDrop(!isUserDrop)
        setLangDrop(false)
    }
    //logic for logout
    const dispatch = useDispatch()
    const user = useSelector((state: RootState) => state.auth)
    let headers = { Authorization: `Bearer ${user.accessToken}` }
    const axiosJWT = AxiosInstance(dispatch, user)
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {

            const postUrl = `http://localhost:8888/log-out`
            const res = await axiosJWT.post(postUrl, null, { headers },);

            console.log("access token 0s", res)
            dispatch(isLogout())
            setUserDrop(false)
            navigate(PathAuth.LOG_IN)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='header row' tabIndex={0}>
            <div className="start col-6 row">
                <div className={`header-left ${isShowSidebar ? "col-4" : "col-2"}`}>
                    <Link to="/" className="logo">
                        <img src={Logo} alt="logo-header" width={isShowSidebar ? 40 : 30} height={isShowSidebar ? 40 : 30} />
                    </Link>
                </div>

                <div className='toggle-btn col-6'>
                    <a href='#' onClick={(event) => handleShowSidebar(event)}><i className="fas fa-bars"></i></a>
                    <div className='title'>Employee Management</div>
                </div>

            </div>
            <div className="end nav-bar col-6 row">
                <div className='search-form col-2'>
                    <input className="form-control" type="text" placeholder="Search here" />
                    <i className="fa fa-search"></i>
                </div>
                <div className="btn-group col-2">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" id="navbarDropdownMenuLink" role="button" aria-expanded="false" onClick={(event) => handleLanguageDrop(event)}>
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

                <div className='btn-group col-2' >
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" id="navbarDropdownMenuLink" role="button" aria-expanded="false" onClick={(event) => handleUser(event)}>
                                <span className="user-img"><img src={avatar} alt="" /><span className="status-online"></span></span>
                                <span >Admin</span>
                            </a>
                            <div className={isUserDrop ? "dropdown-menu show-user" : "dropdown-menu"} aria-labelledby="navbarDropdownMenuLink">
                                <Link to={PathHeader.PROFILE} className="dropdown-item" onClick={() => setUserDrop(false)}>
                                    My profile
                                </Link>
                                <Link to={PathHeader.SETTING} className="dropdown-item" onClick={() => setUserDrop(false)}>
                                    Setting
                                </Link>
                                <button className="dropdown-item" onClick={() => handleLogout()}
                                >
                                    Log out
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Header