import React, { useState, useEffect, useRef } from 'react'
import './AddNewEmployeeModal.scss'
import { Modal, Button, Form } from 'react-bootstrap'
import { SelectComponent } from '../../Helper/index'
import { Employee } from '../../../types/Employee'
import { AxiosInstance } from '../../../store/AxiosInstance'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { serverUrl } from '../../../utils/constant'
import { CrudApiPath } from '../../../routes/Path'
import { SelectOption } from '../../../types/SelectOption'


interface Props {
    isShowModalAddNew: boolean,
    handleClose: () => void
}

const optionsGender = [
    { name: "Select Gender", id: 0 },
    { name: "Male", id: 1 },
    { name: "Female", id: 2 },

]


const AddNewEmployeeModal: React.FC<Props> = (props) => {
    const [newEmployee, setNewEmployee] = useState<Employee>({
        code: "",
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        dateOfBirth: "",
        phoneNumber: "",
        joiningDate: "",
        designation: "",
        quarter: "",
        department: "",
        username: "",
        password: "",
        confirmPassword: ""
    })

    const numberPermission: boolean[] = Array(6).fill(false);

    //get data from database
    const dispatch = useDispatch()
    const user = useSelector((state: RootState) => state.auth)
    let headers = { Authorization: `Bearer ${user.accessToken}` }
    const axiosJWT = AxiosInstance(dispatch, user)
    const [genderSelectedValue, setGenderSelectedValue] = useState<SelectOption | undefined>(optionsGender[0])
    const [departments, setDepartments] = useState<SelectOption[]>([])
    const [departmentSelectedValue, setDepartmentSelectedValue] = useState<SelectOption | undefined>({ name: "Select Department", id: 0 });
    const [designations, setDesignations] = useState<SelectOption[]>([])
    const [designationSelectedValue, setDesignationSelectedValue] = useState<SelectOption | undefined>({ name: "Select Designation", id: 0 });
    const [quarters, setQuarters] = useState<SelectOption[]>([])
    const [quarterSelectedValue, setQuarterSelectedValue] = useState<SelectOption | undefined>({ name: "Select Quarter", id: 0 });

    useEffect(() => {
        const getDataDefault = async () => {
            try {
                const getDefaultDataFromDatabaseUrl = serverUrl + CrudApiPath.GET_DATA_DEFAULT
                const res = await axiosJWT.get(getDefaultDataFromDatabaseUrl, { headers },)
                console.log(res.data.data)
                if (res && res.data && res.data.data) {
                    if (res.data.data.departments) setDepartments(res.data.data.departments)

                    if (res.data.data.designations) setDesignations(res.data.data.designations)

                    if (res.data.data.quarters) setQuarters(res.data.data.quarters)
                }
            } catch (error) {
                console.log(error)
            }
        }
        getDataDefault()
        console.log("Check department : ", departments)
        console.log("Check designation : ", designations)
        console.log("Check quarter : ", quarters)
    }, [])
    // logic add new employee 
    const handleOnChangeGender = (o: SelectOption | undefined) => {
        setGenderSelectedValue(o)
        setNewEmployee({
            ...newEmployee,
            gender: o?.name
        })
    }

    const handleOnChangeQuarter = (o: SelectOption | undefined) => {
        setQuarterSelectedValue(o)
        setNewEmployee({
            ...newEmployee,
            quarter: o?.name
        })
    }
    const handleOnChangeDepartment = (o: SelectOption | undefined) => {
        setDepartmentSelectedValue(o)
        setNewEmployee((state) => ({
            ...state,
            department: o?.name,
        }))
    }
    const handleOnChangeDesignation = (o: SelectOption | undefined) => {
        setDesignationSelectedValue(o)
        setNewEmployee({
            ...newEmployee,
            designation: o?.name,
        })
    }


    const handleAddNewEmployee = async () => {
        try {

            const addNewEmployeeApiEndpoint = serverUrl + CrudApiPath.CREATE_USER;
            const res = await axiosJWT.post(addNewEmployeeApiEndpoint, newEmployee, { headers },)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }


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
                            <input type="text" value={newEmployee.firstName} className="form-control " id="firstName"
                                onChange={(event => setNewEmployee({ ...newEmployee, firstName: event.target.value }))} />
                        </div>
                        <div className="form-group col-sm-6 input-form ">
                            <label htmlFor="lastName">Last Name<span className="text-danger">*</span></label>
                            <input type="text" value={newEmployee.lastName} className="form-control " id="lastName"
                                onChange={(event => setNewEmployee({ ...newEmployee, lastName: event.target.value }))} />
                        </div>
                        <div className="form-group col-sm-6 input-form ">
                            <label htmlFor="username">UserName<span className="text-danger">*</span></label>
                            <input type="text" value={newEmployee.username} className="form-control " id="username"
                                onChange={(event => setNewEmployee({ ...newEmployee, username: event.target.value }))} />
                        </div>
                        <div className="form-group col-sm-6 input-form ">
                            <label htmlFor="email">Email address<span className="text-danger">*</span></label>
                            <input type="email" value={newEmployee.email} className="form-control " id="email"
                                onChange={(event => setNewEmployee({ ...newEmployee, email: event.target.value }))} />
                        </div>
                        <div className="form-group col-sm-6 input-form ">
                            <label htmlFor="username">Birthday<span className="text-danger">*</span></label>
                            <input type="date" value={newEmployee.dateOfBirth} className="form-control " id="username"
                                onChange={(event => setNewEmployee({ ...newEmployee, dateOfBirth: event.target.value }))} />
                        </div>
                        <div className="form-group col-sm-6 input-form ">
                            <label htmlFor="email">Gender<span className="text-danger">*</span></label>
                            <SelectComponent options={optionsGender} id={genderSelectedValue}
                                selectOnChange={(o) => handleOnChangeGender(o)} />
                        </div>
                        <div className="form-group col-sm-6 input-form">
                            <label htmlFor="password">Password</label>
                            <input type="password" value={newEmployee.password} className="form-control " id="password"
                                onChange={(event => setNewEmployee({ ...newEmployee, password: event.target.value }))} />
                        </div>
                        <div className="form-group col-sm-6 input-form">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" value={newEmployee.confirmPassword} className="form-control " id="confirmPassword"
                                onChange={(event => setNewEmployee({ ...newEmployee, confirmPassword: event.target.value }))} />
                        </div>
                        <div className="form-group col-sm-6 input-form ">
                            <label htmlFor="employeeId">Employee ID<span className="text-danger">*</span></label>
                            <input type="text" value={newEmployee.code} className="form-control " id="employeeId"
                                onChange={(event => setNewEmployee({ ...newEmployee, code: event.target.value }))} />
                        </div>
                        <div className="form-group col-sm-6 input-form ">
                            <label htmlFor="joiningDate">Joining Date<span className="text-danger">*</span></label>
                            <input type="date" value={newEmployee.joiningDate} className="form-control "
                                onChange={(event) => setNewEmployee({ ...newEmployee, joiningDate: event.target.value })}
                            />
                        </div>
                        <div className="form-group col-sm-6 input-form ">
                            <label htmlFor="phone">Phone</label>
                            <input type="phone" value={newEmployee.phoneNumber} className="form-control " id="phone"
                                onChange={(event => setNewEmployee({ ...newEmployee, phoneNumber: event.target.value }))} />
                        </div>
                        <div className="form-group col-sm-6 input-form ">
                            <label htmlFor="quarter">Quarter</label>
                            <SelectComponent options={quarters} id={quarterSelectedValue}
                                selectOnChange={(o) => handleOnChangeQuarter(o)} />
                        </div>
                        <div className="form-group col-sm-6 input-form ">
                            <label htmlFor="department">Department<span className="text-danger">*</span></label>
                            <SelectComponent options={departments} id={departmentSelectedValue}
                                selectOnChange={(o) => handleOnChangeDepartment(o)} />
                        </div>
                        <div className="form-group col-sm-6 input-form ">
                            <label htmlFor="designation">Designation<span className="text-danger">*</span></label>
                            <SelectComponent options={designations} id={designationSelectedValue}
                                selectOnChange={(o) => handleOnChangeDesignation(o)} />
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
                            {numberPermission.map((item, index) => {
                                return (
                                    <td key={index} className='text-center'><input type='checkbox' /></td>
                                )
                            })}
                        </tr>
                        <tr>
                            <th scope="row" className='row-center'>Leaves</th>
                            {numberPermission.map((item, index) => {
                                return (
                                    <td key={index} className='text-center'><input type='checkbox' /></td>
                                )
                            })}
                        </tr>
                        <tr>
                            <th scope="row" className='row-center'>Clients</th>
                            {numberPermission.map((item, index) => {
                                return (
                                    <td key={index} className='text-center'><input type='checkbox' /></td>
                                )
                            })}
                        </tr>
                        <tr>
                            <th scope="row" className='row-center'>Projects</th>
                            {numberPermission.map((item, index) => {
                                return (
                                    <td key={index} className='text-center'><input type='checkbox' /></td>
                                )
                            })}
                        </tr>
                        <tr>
                            <th scope="row" className='row-center'>Tasks</th>
                            {numberPermission.map((item, index) => {
                                return (
                                    <td key={index} className='text-center'><input type='checkbox' /></td>
                                )
                            })}
                        </tr>
                        <tr>
                            <th scope="row" className='row-center'>Chats</th>
                            {numberPermission.map((item, index) => {
                                return (
                                    <td key={index} className='text-center'><input type='checkbox' /></td>
                                )
                            })}
                        </tr>
                        <tr>
                            <th scope="row" className='row-center'>Assets</th>
                            {numberPermission.map((item, index) => {
                                return (
                                    <td key={index} className='text-center'><input type='checkbox' /></td>
                                )
                            })}
                        </tr>
                        <tr>
                            <th scope="row" className='row-center'>Timing Sheets</th>
                            {numberPermission.map((item, index) => {
                                return (
                                    <td key={index} className='text-center'><input type='checkbox' /></td>
                                )
                            })}
                        </tr>
                    </tbody>
                </table>

                <button
                    className='button-custom'
                    onClick={() => handleAddNewEmployee()}>
                    Submit
                </button>
            </Modal.Footer>
        </Modal>

    )
}

export default AddNewEmployeeModal