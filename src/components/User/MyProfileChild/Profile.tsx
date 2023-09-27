import { useState } from 'react'
import './Profile.scss'



const Profile = () => {
    const [isShowMiniMenu, setIsShowMiniMenu] = useState<boolean>(false)
    return (
        <div className='profile-container'>
            <div className="profile-personal-information">
                <i className="fas fa-pencil-alt edit-information"></i>
                <div className="title">
                    Personal Informations
                </div>
                <div className="content">
                    <div className="field">
                        <div className="label">
                            Passport No.
                        </div>
                        <div className="value">
                            9876543210
                        </div>
                    </div>
                    <div className="field">
                        <div className="label">
                            Passport Exp Date.
                        </div>
                        <div className="value">
                            9876543210
                        </div>
                    </div>
                    <div className="field">
                        <div className="label">
                            Tel
                        </div>
                        <div className="value">
                            9876543210
                        </div>
                    </div>
                    <div className="field">
                        <div className="label">
                            Nationality
                        </div>
                        <div className="value">
                            Indian
                        </div>
                    </div>
                    <div className="field">
                        <div className="label">
                            Religion
                        </div>
                        <div className="value">
                            Christian
                        </div>
                    </div>
                    <div className="field">
                        <div className="label">
                            Marital status
                        </div>
                        <div className="value">
                            Married
                        </div>
                    </div>
                    <div className="field">
                        <div className="label">
                            Employment of spouse
                        </div>
                        <div className="value">
                            No
                        </div>
                    </div>
                    <div className="field">
                        <div className="label">
                            No. of children
                        </div>
                        <div className="value">
                            2
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile-emergency-contact">
                <i className="fas fa-pencil-alt edit-information"></i>
                <div className="title">
                    Emergency Contact
                </div>
                <div className="content">
                    <div className="field">
                        <div className="subtitle">
                            Primary
                        </div>

                    </div>
                    <div className="field">
                        <div className="label">
                            Name
                        </div>
                        <div className="value">
                            John Doe
                        </div>
                    </div>
                    <div className="field">
                        <div className="label">
                            Relationship
                        </div>
                        <div className="value">
                            Father
                        </div>
                    </div>
                    <div className="field">
                        <div className="label">
                            Phone
                        </div>
                        <div className="value">
                            9876543210, 9876543210
                        </div>
                    </div>
                    <hr />
                    <div className="field">
                        <div className="subtitle">
                            Secondary
                        </div>

                    </div>
                    <div className="field">
                        <div className="label">
                            Name
                        </div>

                        <div className="value">
                            Karen Wills
                        </div>
                    </div>
                    <div className="field">
                        <div className="label">
                            Relationship
                        </div>
                        <div className="value">
                            Brother
                        </div>
                    </div>
                    <div className="field">
                        <div className="label">
                            Phone
                        </div>
                        <div className="value">
                            9876543210, 9876543210
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile-bank-information">
                <div className="title">
                    Bank information
                </div>
                <div className="content">
                    <div className="field">
                        <div className="label">
                            Bank name
                        </div>
                        <div className="value">
                            ICICI Bank
                        </div>
                    </div>
                    <div className="field">
                        <div className="label">
                            Bank account No.
                        </div>
                        <div className="value">
                            159843014641
                        </div>
                    </div>
                    <div className="field">
                        <div className="label">
                            IFSC Code

                        </div>
                        <div className="value">
                            ICI24504
                        </div>
                    </div>
                    <div className="field">
                        <div className="label">
                            PAN No

                        </div>
                        <div className="value">
                            TC000Y56
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile-family-information">
                <div className="title">
                    Family Informations
                </div>
                <i className="fas fa-pencil-alt edit-information"></i>
                <div className="content">
                    <table className="table  ">
                        <thead>
                            <tr>
                                <th className='text-center' scope="col">Name</th>
                                <th className='text-center' scope="col">Relationship</th>
                                <th className='text-center' scope="col">Date of Birth</th>
                                <th className='text-center' scope="col">Phone</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='text-center'>Leo</td>
                                <td className='text-center'>Brother</td>
                                <td className='text-center'>Feb 16th, 2019</td>
                                <td className='text-center'>9876543210</td>
                                <td>
                                    <i className="fa fa-ellipsis-v item-menu" onClick={() => setIsShowMiniMenu((s) => (!s))}>

                                    </i>
                                    {isShowMiniMenu && <div className="mini-dropdown"><div className="dropdown--item" >
                                        <a href="/#"  > <i className="fas fa-user-edit"></i>Edit
                                        </a>
                                    </div>
                                        <div className="dropdown--item">
                                            <a href="/#">
                                                <i className="fas fa-trash-alt"></i>Delete
                                            </a>
                                        </div>
                                    </div>}
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
            <div className="profile-education-information">
                <div className="title">
                    Education informations
                </div>
                <i className="fas fa-pencil-alt edit-information"></i>
                <div className="content">
                    <ul className="experience-list">
                        <div>
                            <div>
                                <div className="experience-user">
                                    <div className="before-circle" />
                                </div>
                                <div className="experience-content">
                                    <div className="timeline-content">
                                        <a href="//#" className="name">International College of Arts and Science (UG)</a>
                                        <div className='major'>Bsc Computer Science</div>
                                        <span className="time">2000 - 2003</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="experience-user">
                                    <div className="before-circle" />
                                </div>
                                <div className="experience-content">
                                    <div className="timeline-content">
                                        <a href="//#" className="name">International College of Arts and Science (PG)</a>
                                        <div className='major'>Msc Computer Science</div>
                                        <span className="time">2000 - 2003</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
            </div >
            <div className="profile-experience">
                <div className="title">
                    Experience
                </div>
                <i className="fas fa-pencil-alt edit-information"></i>
                <div className="content">
                    <ul className="experience-list">
                        <div>
                            <div>
                                <div className="experience-user">
                                    <div className="before-circle" />
                                </div>
                                <div className="experience-content">
                                    <div className="timeline-content">
                                        <a href="//#" className="name">Web Designer at Zen Corporation</a>
                                        <span className="time">Jan 2013 - Present (5 years 2 months)</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="experience-user">
                                    <div className="before-circle" />
                                </div>
                                <div className="experience-content">
                                    <div className="timeline-content">
                                        <a href="//#" className="name">Web Designer at Ron-tech</a>
                                        <div className='major'></div>
                                        <span className="time">Jan 2013 - Present (5 years 2 months)</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="experience-user">
                                    <div className="before-circle" />
                                </div>
                                <div className="experience-content">
                                    <div className="timeline-content">
                                        <a href="//#" className="name">Web Designer at Dalt Technology</a>
                                        <div className='major'></div>
                                        <span className="time">Jan 2013 - Present (5 years 2 months)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </div >

    )
}

export default Profile