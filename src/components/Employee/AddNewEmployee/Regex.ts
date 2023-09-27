// not blank
export const validName = /^[A-Za-z]+$/
//username must be 8-15 characters and must start with a letter//
export const validUsername = /^[a-zA-Z0-9_-]{8,15}$/

//password minimum eight characters, at least one uppercase letter one lowercase letter, one number and one special character
export const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,}$/

export const validEmail = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/

export const validPhoneNumber = /^0[0-9]{9}$/
