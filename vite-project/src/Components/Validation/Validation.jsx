// const validation = (values) => {
//     let errors = {}
//     if(!values. username){
//         errors.username = "Username Required"
//     } 
//     else if (values.username.length < 10){
//         errors.username = "Name must be more than 10 characters"
//     }

//     if(!values. password){
//         errors.password = "Password Required"
//     } 
//     else if (values.password.length < 8){
//         errors.password = "password must be more than 8 characters"
//     }

//     if (!values.confirmPassword) {
//         errors.confirmPassword = "Confirm Password Required";
//     } else if (values.confirmPassword !== values.password) {
//         errors.confirmPassword = "Passwords do not match";
//     }

//     return errors; 
// }

// export default validation;


const validation = (values) => {
    let errors = {};

    // Validate username (email)
    if (!values.username) {
        errors.username = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.username)) {
        errors.username = "Invalid email address";
    }

    // Validate password
    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 8) {
        errors.password = "Password must be more than 8 characters";
    }

    // Validate confirmPassword
    // if (!values.confirmPassword) {
    //     errors.confirmPassword = "Confirm Password is required";
    // } else if (values.confirmPassword !== values.password) {
    //     errors.confirmPassword = "Passwords do not match";
    // }

    return errors;
};

export default validation;
