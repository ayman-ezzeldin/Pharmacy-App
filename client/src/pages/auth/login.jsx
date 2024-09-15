import { Link } from "react-router-dom";
import CommonForm from "../../components/common/form";
import { loginFormControls } from "../../config";
import { useState } from "react";

const initialState = {
  email: "",
  password: "",
};

const AuthLogin = () => {

  const [formData, setFormData] = useState(initialState);

  function onSubmit() {
    
  }
  return (
    <div className="ms-auto w-full max-w-md space-y-6">
      <div className=" text-center">
        <h1 className=" text-3xl font-bold tracking-tight text-foreground">
          sign in your account
        </h1>
        <p className="mt-2">
          Don&apos;t have an account?{" "}
          <Link
            to="/auth/register"
            className=" text-primary ml-2 font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={loginFormControls}
        formData={formData}
        setFormData={setFormData}
        buttonText="Sign in"
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default AuthLogin;
