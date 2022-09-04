
const emailChecker = (email) => {

    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return ({
            emailStatus: "success",
            emailMsg: "Valid Email format"
        })
    } else {
        return ({
            emailStatus: "error",
            emailMsg: "Invalid Email format"
        })
    }
}

export default emailChecker;
