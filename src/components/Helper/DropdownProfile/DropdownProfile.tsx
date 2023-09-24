import React from 'react'
import './DropdownProfile.scss'

interface Props {
    id: number
}
const DropdownProfile: React.FC<Props> = (props) => {

    const handleOpenDropdown = (id: number) => {

    }
    return (
        <div>
            <div className="dropdown-component-profile">
                <div className="dropdown__menu">
                    <i className="fa fa-ellipsis-v" onClick={() => handleOpenDropdown(props.id)}></i>
                </div>
                <div className="dropdown__list">
                    <div className="dropdown--item" >
                        <i className="fas fa-user-edit"></i>
                        <a href="#" >
                            Edit
                        </a>
                    </div>
                    <div className="dropdown--item">
                        <i className="fas fa-trash-alt"></i>
                        <a href="#">
                            Delete
                        </a>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default DropdownProfile