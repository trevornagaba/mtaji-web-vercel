import React from "react";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

const SecurityForm = () => {
    return (
        <div className="ml-5">
          <p className="text-lg font-medium">Reset Password</p>
          <div className="w-full mt-10">
              <TextInput
                  label="Password"
                  name="Password"
                  type="password"
                  placeholder="Password"
              />
          </div>
          <div className="w-full">
              <TextInput
                  label="Confirm Password"
                  name="Confirm Password"
                  type="password"
                  placeholder="Confirm Password"
              />
          </div>
          <div className="mt-10 flex w-full justify-center">
            <Button primary>Update password</Button>
          </div>
        </div>
    );
};

export default SecurityForm;
