import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../redux/auth/operations';
import toast from 'react-hot-toast';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleSubmit = (values, options) => {
    dispatch(register(values))
      .unwrap()
      .then(res => {
        toast.success(`Welcome ${res.user.name}`);
        navigate('/contacts');
      })
      .catch(() => {
        toast.error(`Please check your details or try to login`)
      })
    options.resetForm();
  };

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="bg-white rounded-3xl shadow-xl p-4 flex flex-col gap-4 w-1/4">
          <h3 className="text-center font-bold">Register</h3>

          <label className="flex flex-col gap-2">
            <span>Name:</span>
            <Field
              className="p-2 border-1 border-black shadow-md rounded-md"
              name="name"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span>Email:</span>
            <Field
              className="p-2 border-1 border-black shadow-md rounded-md"
              name="email"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span>Password:</span>
            <Field
              className="p-2 border-1 border-black shadow-md rounded-md"
              name="password"
              type="password"
            />
          </label>

          <button
            className="px-4 py-2 shadow-2xl rounded-md bg-teal-400 text-white cursor-pointer hover:bg-teal-500"
            type="submit"
          >
            Register
          </button>
          <p>
            <Link className="text-teal-500" to="/login">
              Login
            </Link>{' '}
            if you already have an account
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
