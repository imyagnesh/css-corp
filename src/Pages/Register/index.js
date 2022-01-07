import React from 'react';
import { Formik, Form, Field } from 'formik';
import cn from 'classnames';

const Register = () => {
  const onSubmitLogin = (values) => {
    console.log(values);
  };

  const validateLogin = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Please fill out the field!';
    }
    if (!values.email) {
      errors.email = 'Required.';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Please fill out the field!';
    }
    if (!values.password) {
      errors.password = 'Required.';
    }
    if (!values.gender) {
      errors.gender = 'Please fill out the field!';
    }
    return errors;
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        age: '',
        gender: '',
      }}
      onSubmit={onSubmitLogin}
      validate={validateLogin}
    >
      {({ values, handleChange, errors, handleBlur, touched }) => (
        <Form className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="name"
                className={cn(
                  'appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm',
                  {
                    'border-red-300': touched.email && !!errors.email,
                    'focus:border-red-500': touched.email && !!errors.email,
                  },
                )}
                placeholder="Name"
              />
              {touched.name && !!errors.name && <p>{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="email"
                className={cn(
                  'appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm',
                  {
                    'border-red-300': touched.email && !!errors.email,
                    'focus:border-red-500': touched.email && !!errors.email,
                  },
                )}
                placeholder="Email address"
              />
              {touched.email && !!errors.email && <p>{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="current-password"
                className={cn(
                  'appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm',
                  {
                    'border-red-300': touched.password && !!errors.password,
                    'focus:border-red-500':
                      touched.password && !!errors.password,
                  },
                )}
                placeholder="Password"
              />
              {touched.password && !!errors.password && (
                <p>{errors.password}</p>
              )}
            </div>
            <div>
              <label htmlFor="age" className="sr-only">
                Age
              </label>
              <input
                type="number"
                name="age"
                id="age"
                value={values.age}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Please Enter your age"
              />
            </div>
            <div className="flex px-2 py-2">
              <label
                htmlFor="gender"
                id="my-radio-group"
                className="form-check pr-2"
              >
                Gender
              </label>
              <div role="group" aria-labelledby="my-radio-group">
                <label className="pr-2">
                  <Field type="radio" name="gender" value="Female" />
                  Female
                </label>
                <label className="pr-2">
                  <Field type="radio" name="gender" value="Male" />
                  Male
                </label>
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3" />
              Sign Up
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Register;
