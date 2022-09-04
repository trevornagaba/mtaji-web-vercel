import React from "react";

const passwordStrength = (password) => {
    
    let strongRegex = new RegExp("^(?=.{10,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    let mediumRegex = new RegExp("^(?=.{8,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    let enoughRegex = new RegExp("(?=.{5,}).*", "g");
    let result = "Type Password";
    let strength = "default";

    if(password.length === 0) {
        result = "Password field empty";
    } else if (enoughRegex.test(password) === false) {
        result = "More Characters";
        strength = "error";
    } else if (strongRegex.test(password)) {
        result = "Strong!";
        strength = "success"
    } else if (mediumRegex.test(password)) {
        result = "Medium!";
        strength = "warning"
    } else {
        result = "Weak!";
        strength = "error";
    }

    return ({
        strength: strength,
        display: result
    })
}

export default passwordStrength;
