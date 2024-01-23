import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto mt-8 shadow-md rounded-lg p-6 bg-slate-100"
    >
      <p className='text-center font-bold text-3xl mb-3'>Login!!</p>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder='Enter Your Email'
          {...register('email', { required: 'Email is required' })}
          className="border rounded-lg border-gray-300 p-2 w-full"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder='Enter Your Password'
          {...register('password', { required: 'Password is required' })}
          className="border rounded-lg border-gray-300 p-2 w-full"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
      </div>

      <p className='mb-4'>Have a new Account? <Link to='/register'><span className='ml-3 hover:font-semibold hover:text-red-500'>Please Register</span></Link></p>

      <button type="submit" className="bg-gray-500 w-full text-white px-4 py-2 mb-6 rounded" aria-label="Login">
        Login
      </button>
    </form>
  );
};

export default Login;
