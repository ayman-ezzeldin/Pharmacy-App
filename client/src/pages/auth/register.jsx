import { Link, useNavigate } from "react-router-dom";
import CommonForm from "../../components/common/form";
import { registerFormControls } from "../../config";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/auth-slice";

const initialState = {
  username: "",
  email: "",
  password: "",
};

const AuthRegister = () => {

  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onSubmit(event) {
    event.preventDefault();
    console.log(formData);
    
    dispatch(registerUser(formData)).then((data) => {
      console.log(data);
      
    } )
    
  }
  
  return (
    <div className="ms-auto w-full max-w-md space-y-6">
      <div className=" text-center">
        <h1 className=" text-3xl font-bold tracking-tight text-foreground">
          Create new account
        </h1>
        <p className="mt-2">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className=" text-primary ml-2 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={registerFormControls}
        formData={formData}
        setFormData={setFormData}
        buttonText="Sign Up"
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default AuthRegister;
