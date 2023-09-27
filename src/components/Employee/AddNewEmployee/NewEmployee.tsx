import { useState, useEffect, useCallback } from 'react'
import './NewEmployee.scss'
import { SelectComponent } from '../../Helper/index'
import { Employee } from '../../../types/Employee'
import { AxiosInstance } from '../../../store/AxiosInstance'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { serverUrl } from '../../../utils/constant'
import { CrudApiPath, PathSidebar } from '../../../routes/Path'
import { SelectOption } from '../../../types/SelectOption'
import { validEmail, validName, validPassword, validPhoneNumber, validUsername } from './Regex'
import { useNavigate } from 'react-router-dom'
var debounce = require('lodash.debounce');



const optionsGender = [
    { name: "Select Gender", id: 0 },
    { name: "Male", id: 1 },
    { name: "Female", id: 2 },
    { name: "Other", id: 3 },
]

const NewEmployee = () => {
    const navigate = useNavigate()
    const [newEmployee, setNewEmployee] = useState<Employee>({
        code: "",
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        gender: "",
        dateOfBirth: "",
        phoneNumber: "",
        joiningDate: "",
        designation: "",
        quarter: "",
        department: "",
        username: "",
        password: "",
        confirmPassword: "",
    })
    const [validError, setValidError] = useState({
        firstName: false,
        lastName: false,
        username: false,
        password: false,
        confirmPassword: false,
        email: false,
        phoneNumber: false
    })

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

        // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // logic validation -- debounce & regex
    const validate = () => {

    }
    // const debounceValidate = useMemo(() => { return debounce(validate, 500) }, [])
    // const debounceValidate = debounce(validate, 1000)
    //redirect all employee
    const redirectAllEmployee = () => {
        navigate(PathSidebar.ALL_EMPLOYEES)
    }
    return (
        <div className='new-employee-container'>


            <div className="employees-header">
                <div className='page-title'><h3>New Employee</h3></div>
                <div className='bread-crumb'>
                    <p className='breadcrumb-history'>Dashboard</p>
                    <p className='redirect-all-employee' onClick={() => redirectAllEmployee()}>/ Employee  </p> <p>/ New employee</p></div>
            </div>
            <div className="form-add-employee">
                <div className="input-form ">
                    <label htmlFor="firstName">First Name<span className="text-danger">*</span></label>
                    <input type="text" value={newEmployee.firstName} className="form-control " id="firstName"
                        onChange={(event => setNewEmployee({ ...newEmployee, firstName: event.target.value }))} />
                </div>
                <div className="input-form ">
                    <label htmlFor="lastName">Last Name<span className="text-danger">*</span></label>
                    <input type="text" value={newEmployee.lastName} className="form-control " id="lastName"
                        onChange={(event => setNewEmployee({ ...newEmployee, lastName: event.target.value }))} />
                </div>
                <div className="input-form ">
                    <label htmlFor="employeeId">Employee ID</label>
                    <input type="text" value={newEmployee.code} className="form-control " id="employeeId"
                        onChange={(event => setNewEmployee({ ...newEmployee, code: event.target.value }))} />
                </div>

                <div className="input-form ">
                    <label htmlFor="email">Email</label>
                    <input type="email" value={newEmployee.email} className="form-control " id="email"
                        onChange={(event => setNewEmployee({ ...newEmployee, email: event.target.value }))} />
                </div>
                <div className="input-form ">
                    <label htmlFor="address">Address<span className="text-danger">*</span></label>
                    <input type="text" value={newEmployee.address} className="form-control " id="address"
                        onChange={(event => setNewEmployee({ ...newEmployee, address: event.target.value }))} />
                </div>
                <div className="input-form ">
                    <label htmlFor="email">Gender<span className="text-danger">*</span></label>
                    <SelectComponent options={optionsGender} id={genderSelectedValue}
                        selectOnChange={(o) => handleOnChangeGender(o)} />
                </div>

                <div className="input-form ">
                    <label htmlFor="username">UserName</label>
                    <input type="text" value={newEmployee.username} className="form-control " id="username"
                        onChange={(event => setNewEmployee({ ...newEmployee, username: event.target.value }))} />
                </div>

                {/* <div className="input-form">
                    <label htmlFor="password">Password</label>
                    <input type="password" value={newEmployee.password} className="form-control " id="password"
                        onChange={(event => setNewEmployee({ ...newEmployee, password: event.target.value }))} />
                </div>
                <div className="input-form">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" value={newEmployee.confirmPassword} className="form-control " id="confirmPassword"
                        onChange={(event => setNewEmployee({ ...newEmployee, confirmPassword: event.target.value }))} />
                </div> */}
                <div className="input-form ">
                    <label htmlFor="username">Birthday<span className="text-danger">*</span></label>
                    <input type="date" value={newEmployee.dateOfBirth} className="form-control " id="username"
                        onChange={(event => setNewEmployee({ ...newEmployee, dateOfBirth: event.target.value }))} />
                </div>
                <div className="input-form ">
                    <label htmlFor="joiningDate">Joining Date<span className="text-danger">*</span></label>
                    <input type="date" value={newEmployee.joiningDate} className="form-control "
                        onChange={(event) => setNewEmployee({ ...newEmployee, joiningDate: event.target.value })}
                    />
                </div>
                <div className="input-form ">
                    <label htmlFor="phone">Phone<span className="text-danger">*</span></label>
                    <input type="phone" value={newEmployee.phoneNumber} className="form-control " id="phone"
                        onChange={(event => setNewEmployee({ ...newEmployee, phoneNumber: event.target.value }))} />
                </div>
                <div className="input-form ">
                    <label htmlFor="quarter">Quarter<span className="text-danger">*</span></label>
                    <SelectComponent options={quarters} id={quarterSelectedValue}
                        selectOnChange={(o) => handleOnChangeQuarter(o)} />
                </div>
                <div className="input-form ">
                    <label htmlFor="department">Department<span className="text-danger">*</span></label>
                    <SelectComponent options={departments} id={departmentSelectedValue}
                        selectOnChange={(o) => handleOnChangeDepartment(o)} />
                </div>
                <div className="input-form ">
                    <label htmlFor="designation">Designation<span className="text-danger">*</span></label>
                    <SelectComponent options={designations} id={designationSelectedValue}
                        selectOnChange={(o) => handleOnChangeDesignation(o)} />
                </div>
                <div className="end-form">
                    <button className='button-custom'
                        onClick={() => handleAddNewEmployee()}>
                        Submit
                    </button>
                </div>
            </div>

        </div >
    )
}

export default NewEmployee