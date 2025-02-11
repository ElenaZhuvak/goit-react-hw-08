import { lazy } from "react";

const LoginForm = lazy(()=>import("../../components/LoginForm/LoginForm"))

const LoginPage = () => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;