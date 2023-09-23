import React, { useState } from 'react'
import './AllEmployee.scss'
import { NavLink } from 'react-router-dom'
import IMAGES from '../../assets/images/profiles'
import AddNewEmployeeModal from './AddNewEmployeeModal'
import { SelectComponent, Pagination } from '../Helper'

const options = [
    { label: "Select Designation", value: 0 },
    { label: "Web Developer", value: 1 },
    { label: "Web Designer", value: 2 },
    { label: "Android Developer", value: 3 },
    { label: "Ios Developer", value: 4 },
]

const AllEmployee = () => {
    const [showMiniMenu, setShowMiniMenu] = useState<boolean[]>(Array(12).fill(false))
    const [isShowModalAddNew, setIsShowModalAddNew] = useState<boolean>(false)
    const [value, setValue] = useState<typeof options[0] | undefined>(options[0]);

    const handleOpenMiniMenu = (index: number) => {
        let showMiniMenuNewState = [...showMiniMenu];
        showMiniMenuNewState[index] = !showMiniMenuNewState[index]
        setShowMiniMenu(showMiniMenuNewState)
    }
    const handleCloseAddNewModal = () => {
        setIsShowModalAddNew(false)
    }
    const handleShowAddNewModal = () => {
        setIsShowModalAddNew(true)
    }
    return (
        <>
            <div className='all-employees-container'>
                <div className="employees-header">
                    <div className="header-left">
                        <div className='page-title'><h3>Employee</h3></div>
                        <div className='bread-crumb'>
                            <p className='breadcrumb-history'>Dashboard</p>
                            <p>/ Employee</p></div>
                    </div>
                    <div className="header-right">
                        <button ><i className="fa fa-th"></i></button>
                        <button ><i className="fa fa-bars"></i></button>
                        <button className="add-employee" onClick={() => handleShowAddNewModal()}> <b>+</b> Add Employee</button>
                    </div>
                </div>
                <div className="employees-content">
                    {/* <div className="search"> */}
                    <div className="item ">
                        <div className="box before">
                            <input type="text" required={true} className='input' />
                            <span>
                                Employee Id
                            </span>
                        </div>
                    </div>

                    <div className="item ">
                        <div className="box">
                            <input type="text" required={true} className='input' />
                            <span>Employee Name</span>
                        </div>
                    </div>


                    <div className="item designation ">
                        <SelectComponent options={options} value={value}
                            selectOnChange={(o) => setValue(o)} />

                    </div>
                    <div className="item"><button className="search">SEARCH</button></div>

                    <div className="card-profile">
                        <NavLink to="/profile" style={{ textDecoration: 'none', color: 'black' }}>
                            <img src={IMAGES.avatar_02} alt="" />
                            <h4>John Doe</h4>
                        </NavLink>
                        <small>Web Designer</small>
                        <i className="fa fa-ellipsis-v item-menu" onClick={() => handleOpenMiniMenu(0)}></i>

                        {showMiniMenu[0] && <div className="mini-dropdown">
                            <div className="dropdown--item" >

                                <a href="#"  > <i className="fas fa-user-edit"></i>Edit
                                </a>
                            </div>
                            <div className="dropdown--item">
                                <a href="#">
                                    <i className="fas fa-trash-alt"></i>Delete
                                </a>
                            </div>
                        </div>}
                    </div>

                    <div className="card-profile">
                        <NavLink to="/profile" style={{ textDecoration: 'none', color: 'black' }}><img src={IMAGES.avatar_03} alt="" />
                            <h4>Alana Huber</h4></NavLink>
                        <small>Ios Developer</small>
                        <i className="fa fa-ellipsis-v item-menu" onClick={() => handleOpenMiniMenu(1)}></i>
                        {showMiniMenu[1] && <div className="mini-dropdown">
                            <div className="dropdown--item" >

                                <a href="#"  > <i className="fas fa-user-edit"></i>Edit
                                </a>
                            </div>
                            <div className="dropdown--item">
                                <a href="#">
                                    <i className="fas fa-trash-alt"></i>Delete
                                </a>
                            </div>
                        </div>}
                    </div>

                    <div className="card-profile">
                        <NavLink to="/profile" style={{ textDecoration: 'none', color: 'black' }}><img src={IMAGES.avatar_05} alt="" />
                            <h4>Tarah Shropshire</h4></NavLink>
                        <small>Team Leader</small>
                        <i className="fa fa-ellipsis-v item-menu" onClick={() => handleOpenMiniMenu(2)}></i>
                        {showMiniMenu[2] && <div className="mini-dropdown">
                            <div className="dropdown--item" >

                                <a href="#"  > <i className="fas fa-user-edit"></i>Edit
                                </a>
                            </div>
                            <div className="dropdown--item">
                                <a href="#">
                                    <i className="fas fa-trash-alt"></i>Delete
                                </a>
                            </div>
                        </div>}
                    </div>

                    <div className="card-profile">
                        <NavLink to="/profile" style={{ textDecoration: 'none', color: 'black' }}><img src={IMAGES.avatar_06} alt="" />
                            <h4>Mike Litorus</h4></NavLink>
                        <small>Android Developer</small>
                        <i className="fa fa-ellipsis-v item-menu" onClick={() => handleOpenMiniMenu(0)}></i>

                    </div>
                    <div className="card-profile">
                        <NavLink to="/profile" style={{ textDecoration: 'none', color: 'black' }}><img src={IMAGES.avatar_07} alt="" />
                            <h4>Catherine Manseau</h4></NavLink>
                        <small>Web Designer</small>
                        <i className="fa fa-ellipsis-v item-menu" onClick={() => handleOpenMiniMenu(0)}></i>

                    </div>
                    <div className="card-profile">
                        <NavLink to="/profile" style={{ textDecoration: 'none', color: 'black' }}><img src={IMAGES.avatar_09} alt="" />
                            <h4>Catherine Manseau</h4></NavLink>
                        <small>Ios Developer</small>
                        <i className="fa fa-ellipsis-v item-menu" onClick={() => handleOpenMiniMenu(0)}></i>

                    </div>
                    <div className="card-profile">
                        <NavLink to="/profile" style={{ textDecoration: 'none', color: 'black' }}><img src={IMAGES.avatar_21} alt="" />
                            <h4>Conor Campbell</h4></NavLink>
                        <small>Team Leader</small>
                        <i className="fa fa-ellipsis-v item-menu" onClick={() => handleOpenMiniMenu(0)}></i>

                    </div>
                    <div className="card-profile">
                        <NavLink to="/profile" style={{ textDecoration: 'none', color: 'black' }}><img src={IMAGES.avatar_28} alt="" />
                            <h4>Gauge Burke</h4></NavLink>
                        <small>Web Designer</small>
                        <i className="fa fa-ellipsis-v item-menu" onClick={() => handleOpenMiniMenu(0)}></i>

                    </div>
                    <div className="card-profile">
                        <NavLink to="/profile" style={{ textDecoration: 'none', color: 'black' }}><img src={IMAGES.avatar_29} alt="" />
                            <h4>Cristal Krause</h4></NavLink>
                        <small>Android Developer</small>
                        <i className="fa fa-ellipsis-v item-menu" onClick={() => handleOpenMiniMenu(0)}></i>

                    </div>
                    <div className="card-profile">
                        <NavLink to="/profile" style={{ textDecoration: 'none', color: 'black' }}><img src={IMAGES.avatar_19} alt="" />
                            <h4>Raquel Schmidt</h4></NavLink>
                        <small>Ios Developer</small>
                        <i className="fa fa-ellipsis-v item-menu" onClick={() => handleOpenMiniMenu(0)}></i>

                    </div>
                    <div className="card-profile">
                        <NavLink to="/profile" style={{ textDecoration: 'none', color: 'black' }}><img src={IMAGES.avatar_18} alt="" />
                            <h4>Aniyah Baker</h4></NavLink>
                        <small>Web Designer</small>
                        <i className="fa fa-ellipsis-v item-menu" onClick={() => handleOpenMiniMenu(0)}></i>

                    </div>
                    <div className="card-profile">
                        <NavLink to="/profile" style={{ textDecoration: 'none', color: 'black' }}><img src={IMAGES.avatar_17} alt="" />
                            <h4>Carlos Patrick</h4></NavLink>
                        <small>Android Developer</small>
                        <i className="fa fa-ellipsis-v item-menu" onClick={() => handleOpenMiniMenu(0)}></i>

                    </div>

                </div>
                <div className="all-employee-pagination">
                    <Pagination />
                </div>
            </div >
            <AddNewEmployeeModal isShowModalAddNew={isShowModalAddNew} handleClose={handleCloseAddNewModal} />
        </>
    )
}

export default AllEmployee