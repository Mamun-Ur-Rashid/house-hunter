import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../provider/AuthProvider';


const Login = () => {

    const navigate = useNavigate();
    const { setUser} = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('https://odd-pink-rattlesnake-veil.cyclic.app/login', data);
            const {user, token} = response.data;
            console.log(response);
            setUser(user);
            localStorage.setItem('token', token);
            console.log(response.data.token);
            reset();
            navigate('/')
        } catch (error) {
            console.error(error.response.data.message);
        }

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

            <p className='mb-4'>Don't have an account? <Link to='/register'><span className='ml-3 hover:font-semibold hover:text-red-500'>Please Register</span></Link></p>

            <button type="submit" className="bg-gray-500 w-full text-white px-4 py-2 mb-6 rounded" aria-label="Login">
                Login
            </button>
        </form>
    );
};

export default Login;
