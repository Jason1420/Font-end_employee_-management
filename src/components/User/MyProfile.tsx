import './MyProfile.scss'
import avatar from '../../assets/images/profiles/avatar-05.jpg';
import { NavLink, Routes, Route } from 'react-router-dom';
import { Profile, BankStatutory } from './MyProfileChild';
import Projects from '../Project/Projects';
const MyProfile = () => {
    // const [isOpenEditForm, setIsOpenEditForm] = useState<boolean>(false)
    const handleOpenEditForm = () => {

    }
    return (
        <div className='dashboard-profile-container'>
            <div className="dashboard-header">
                <div className='page-title'><h3>Profile</h3></div>
                <div className='bread-crumb'>
                    <p className='breadcrumb-history'>Dashboard</p>
                    <p>/ Profile</p></div>
            </div>

            <div className="dashboard-general">
                <div className="view">
                    <div className="profile-view">
                        <div className="profile-image">
                            <img src={avatar} alt="" />
                        </div>
                        <div className="profile-info">
                            <h3>John Doe</h3>
                            <h6>UI/UX Design Team</h6>
                            <small>Web Designer</small>
                            <div className="staff-id">Employee ID : FT-0001</div>
                            <h6>Date of Join : 1st Jan 2013</h6>
                            <button>Send Message</button>
                        </div>
                    </div>
                    <div className="personal-info">
                        <i className="fas fa-pencil-alt edit-user" onClick={() => handleOpenEditForm()}></i>
                        <div className="field">
                            <div className="title">
                                Phone:
                            </div>
                            <div className="value">
                                <a href='/#'>
                                    johndoe@example.com</a>
                            </div>
                        </div>

                        <div className="field">
                            <div className="title">
                                Email:
                            </div>
                            <div className="value">
                                <a href='/#'>9876543210</a>
                            </div>
                        </div>

                        <div className="field">
                            <div className="title">
                                Birthday:
                            </div>
                            <div className="value">
                                24th July
                            </div>
                        </div>

                        <div className="field">
                            <div className="title">
                                Address:
                            </div>
                            <div className="value">
                                1861 Bayonne Ave, Manchester Township, NJ, 08759
                            </div>
                        </div>

                        <div className="field">
                            <div className="title">
                                Gender:
                            </div>
                            <div className="value">
                                Male
                            </div>
                        </div>

                        <div className="field">
                            <div className="title">
                                Reports to:
                            </div>
                            <div className="value">
                                <a href='/#'>Jeffery Lalor</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab">
                    <NavLink className={({ isActive }) =>
                        isActive ? "active" : ""
                    } to='/profile' end><button>Profile</button></NavLink>
                    <NavLink to='/profile/2'><button>Project</button></NavLink>
                    <NavLink to='/profile/3'><button>Bank & Statutory (Admin Only)</button></NavLink>

                </div>

            </div>

            <div className="dashboard-content">
                <Routes>
                    <Route index element={<Profile />} />
                    <Route path='/2' element={<Projects />} />
                    <Route path='/3/' element={<BankStatutory />} />
                </Routes>
            </div>
        </div >
    )
}

export default MyProfile