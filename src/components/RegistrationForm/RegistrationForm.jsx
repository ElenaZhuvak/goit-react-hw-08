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
        toast.error(`Please check your details or try to login`);
      });
    options.resetForm();
  };

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-300">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="bg-white rounded-3xl shadow-xl p-6 flex flex-col gap-4 w-full max-w-md">
          <h3 className="text-center text-2xl font-bold text-gray-800">
            Register
          </h3>

          <label className="flex flex-col gap-2">
            <span className="text-gray-700">Name:</span>
            <Field
              className="p-2 border border-gray-300 shadow-sm rounded-md"
              name="name"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-gray-700">Email:</span>
            <Field
              className="p-2 border border-gray-300 shadow-sm rounded-md"
              name="email"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-gray-700">Password:</span>
            <Field
              className="p-2 border border-gray-300 shadow-sm rounded-md"
              name="password"
              type="password"
            />
          </label>

          <button
            className="px-4 py-2 rounded-md bg-[#06b6d4] text-white cursor-pointer hover:bg-cyan-600 shadow-md"
            type="submit"
          >
            Register
          </button>
          <p className="text-sm text-gray-600 text-center">
            <Link className="text-[#06b6d4] hover:underline" to="/login">
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
