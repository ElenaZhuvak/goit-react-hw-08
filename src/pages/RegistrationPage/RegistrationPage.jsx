import { lazy } from "react";

const RegistrationForm = lazy(() => import("../../components/RegistrationForm/RegistrationForm"))

const RegistrationPage = () => {
  return (
  <div>
    <RegistrationForm />
  </div>
  );
};

export default RegistrationPage;