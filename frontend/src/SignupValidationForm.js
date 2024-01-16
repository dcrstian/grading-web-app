function CreateAccountValidation(values) {
    let error = {}
    const email_regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const password_regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

    if(values.name === "") {
        error.name = "Name should not be empty"
    } else {
        error.name = ""
    }

    if(values.email === "") {
        error.email = "Email should not be empty"
    } else if(!email_regex.test(values.email)) {
        error.email = "Invalid email"
    } else {
        error.email = ""
    }

    if(values.password === "") {
        error.password = "Password should not be empty"
    } else if(!password_regex.test(values.password)) {
        error.password = "Password does not meet the requirements"
    } else {
        error.password = ""
    }

    return error;
}

export default CreateAccountValidation