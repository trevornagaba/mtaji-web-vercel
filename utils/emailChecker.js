
const emailChecker = (email) => {

    if(email.length!==0) {
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

    } else {
        return ({
            emailStatus: "default",
            emailMsg: "Add an Email"
        })
    }
}

export default emailChecker;
