import React from 'react'
import './UpdateProfile.scss'
import { Modal, Form } from 'react-bootstrap'
interface Props {
    isShowModalAddNew: boolean,
    handleClose: () => void
}


const UpdateProfile: React.FC<Props> = (props) => {
    const numberPermission: boolean[] = Array(6).fill(false);
    return (
        <Modal show={props.isShowModalAddNew} onHide={props.handleClose}
            size='lg'
        >
            <Modal.Header closeButton>
                <Modal.Title
                    className="contained-modal-title-vcenter"
                >New Employee</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>

                    <div className="form-add-employee row">
                        <div className="form-group col-sm-6 input-form ">
                            <label htmlFor="firstName">First Name<span className="text-danger">*</span></label>
                            <input type="text" className="form-control " id="firstName" />
                        </div>
                        <div className="form-group col-sm-6 input-form ">
                            <label htmlFor="lastName">Last Name<span className="text-danger">*</span></label>
                            <input type="text" className="form-control " id="lastName" />
                        </div>
                        <div className="form-group col-sm-6 input-form ">
                            <label htmlFor="username">UserName<span className="text-danger">*</span></label>
                            <input type="text" className="form-control " id="username" />
                        </div>
                        <div className="form-group col-sm-6 input-form ">
                            <label htmlFor="email">Email address<span className="text-danger">*</span></label>
                            <input type="email" className="form-control " id="email" />
                        </div>
                        <div className="form-group col-sm-6 input-form">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control " id="password" />
                        </div>
                        <div className="form-group col-sm-6 input-form">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" className="form-control " id="confirmPassword" />
                        </div>
                        <div className="form-group col-sm-6 input-form ">
                            <label htmlFor="employeeId">Employee ID<span className="text-danger">*</span></label>
                            <input type="text" className="form-control " id="employeeId" />
                        </div>
                        <div className="form-group col-sm-6 input-form ">
                            <label htmlFor="joiningDate">Joining Date<span className="text-danger">*</span></label>
                            <input type="date" className="form-control  " id="joiningDate" />
                        </div>
                        <div className="form-group col-sm-6 input-form ">
                            <label htmlFor="phone">Phone</label>
                            <input type="phone" className="form-control " id="phone" />
                        </div>
                        <div className="form-group col-sm-6 input-form ">
                            <label htmlFor="quarter">Quarter</label>
                            {/* <input type="text" className="form-control " id="quarter" /> */}
                            {/* <SelectComponent options={options} value={value}
                                selectOnChange={(o) => setValue(o)} /> */}
                        </div>
                        <div className="form-group col-sm-6 input-form ">
                            <label htmlFor="department">Department<span className="text-danger">*</span></label>
                            {/* <input type="text" className="form-control " id="department" /> */}
                            {/* <SelectComponent options={options} value={value}
                                selectOnChange={(o) => setValue(o)} /> */}
                        </div>
                        <div className="form-group col-sm-6 input-form ">
                            <label htmlFor="designation">Designation<span className="text-danger">*</span></label>
                            {/* <input type="text" className="form-control " id="designation" /> */}
                            {/* <SelectComponent options={options} value={value}
                                selectOnChange={(o) => setValue(o)} /> */}
                        </div>
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <table className="table table-striped ">
                    <thead>
                        <tr>
                            <th className='' scope="col">Module Permission</th>
                            <th className='text-center' scope="col">Read</th>
                            <th className='text-center' scope="col">Write</th>
                            <th className='text-center' scope="col">Create</th>
                            <th className='text-center' scope="col">Delete</th>
                            <th className='text-center' scope="col">Import</th>
                            <th className='text-center' scope="col">Export</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className='row-center'>Holidays</th>
                            {numberPermission.map(() => {
                                return (
                                    <td className='text-center'><input type='checkbox' /></td>
                                )
                            })}
                        </tr>
                        <tr>
                            <th scope="row" className='row-center'>Leaves</th>
                            {numberPermission.map(() => {
                                return (
                                    <td className='text-center'><input type='checkbox' /></td>
                                )
                            })}
                        </tr>
                        <tr>
                            <th scope="row" className='row-center'>Clients</th>
                            {numberPermission.map(() => {
                                return (
                                    <td className='text-center'><input type='checkbox' /></td>
                                )
                            })}
                        </tr>
                        <tr>
                            <th scope="row" className='row-center'>Projects</th>
                            {numberPermission.map(() => {
                                return (
                                    <td className='text-center'><input type='checkbox' /></td>
                                )
                            })}
                        </tr>
                        <tr>
                            <th scope="row" className='row-center'>Tasks</th>
                            {numberPermission.map(() => {
                                return (
                                    <td className='text-center'><input type='checkbox' /></td>
                                )
                            })}
                        </tr>
                        <tr>
                            <th scope="row" className='row-center'>Chats</th>
                            {numberPermission.map(() => {
                                return (
                                    <td className='text-center'><input type='checkbox' /></td>
                                )
                            })}
                        </tr>
                        <tr>
                            <th scope="row" className='row-center'>Assets</th>
                            {numberPermission.map(() => {
                                return (
                                    <td className='text-center'><input type='checkbox' /></td>
                                )
                            })}
                        </tr>
                        <tr>
                            <th scope="row" className='row-center'>Timing Sheets</th>
                            {numberPermission.map(() => {
                                return (
                                    <td className='text-center'><input type='checkbox' /></td>
                                )
                            })}
                        </tr>
                    </tbody>
                </table>

                <button
                    className='button-custom'
                    onClick={props.handleClose}>
                    Submit
                </button>
            </Modal.Footer>
        </Modal>

    )
}

export default UpdateProfile