import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        // Handle form submission logic here
        console.log(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-8 shadow-md rounded-lg p-6 bg-slate-100">
            <p className='text-center font-bold text-3xl mb-3'>Please Register</p>
            <div className="mb-2">
                <label htmlFor="fullName" className="block  text-gray-700 text-sm font-bold mb-1">Full Name</label>
                <input type="text" id="fullName" placeholder='Enter you Full Name' {...register('fullName', { required: 'Full name is required' })} className="border rounded-lg border-gray-300 p-2 w-full" />
                {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
            </div>

            <div className="mb-2">
                <label htmlFor="role" className="block text-gray-700 text-sm font-bold mb-1">Role</label>
                <select id="role" {...register('role', { required: 'Role is required' })} className="border border-gray-300 p-2 w-full rounded-lg">
                    <option value="" disabled>Select Role</option>
                    <option value="House Owner">House Owner</option>
                    <option value="House Renter">House Renter</option>
                </select>
                {errors.role && <p className="text-red-500 text-sm">{errors.role.message}</p>}
            </div>

            <div className="mb-2">
                <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-1">Phone Number</label>
                <input type="text" id="phoneNumber" placeholder='017.........' {...register('phoneNumber', { required: 'Phone number is required' })} className="border rounded-lg border-gray-300 p-2 w-full" />
                {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
            </div>

            <div className="mb-2">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-1">Email</label>
                <input type="email" id="email" placeholder='Enter Your Email' {...register('email', { required: 'Email is required' })} className="border rounded-lg border-gray-300 p-2 w-full" />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div className='mb-2'>
                <label htmlFor="" className='block text-gray-700 text-sm font-bold mb-1'>Password</label>
                <input className='border border-gray-300 p-2 w-full' type='password' {...register("password", {
                    required: true,
                    minLength: 8,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                })} placeholder='Enter your password' />
                {errors.password?.type == 'required' && <span className='mt-3 text-red-600'>Password field required</span>}
                {errors.password?.type === 'minLength' && <span className='mt-3 text-red-600'>Password must be 8 characters long</span>}
                {errors.password?.type === 'maxLength' && <span className='mt-3 text-red-600'>Password must be less than 20 characters</span>}
                {errors.password?.type === 'pattern' && <span className='mt-3 text-red-600'>Password must have one upperCase, one lowerCase, one number and one special characters</span>}
            </div>

            <p className='my-2'>Allready have an Account? <Link to='/login'><span className=' ml-5 hover:font-semibold hover:text-red-500'>Please LogIn</span></Link></p>

            <button type="submit" className="bg-gray-500 w-full text-white px-4 py-2 mb-1 rounded">Register</button>
        </form>
    );
};

export default Register;