export interface Employee {
    id?: number,
    code: string
    firstName: string
    lastName: string
    email: string
    address: string
    gender: string | undefined
    dateOfBirth: string
    phoneNumber: string
    joiningDate: string
    designation: string | undefined
    quarter: string | undefined
    avatar?: string,
    salary?: number
    department: string | undefined
    username: string,
    password: string,
    confirmPassword: string
}
