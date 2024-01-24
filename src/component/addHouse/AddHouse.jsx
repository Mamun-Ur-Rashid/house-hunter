import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../provider/AuthProvider';
import { json } from 'react-router-dom';
import { Result } from 'postcss';
import Swal from 'sweetalert2';

const AddHouse = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { user } = useAuth();

    const onSubmit = (data) => {
        fetch('http://localhost:5000/addHouse', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(Result => {
            if(Result.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Successfully added a House!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                 })
            }
            reset();
        })
        .catch(error => {
            console.log(error);
        })
        console.log(data);
    };
    return (
        <div className='w-3/4 mx-auto shadow-2xl bg-slate-100 p-7 rounded-2xl my-14'>
            <h3 className='font-bold text-center text-3xl mb-6 mt-4'>Added A House</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid md:grid-cols-2 gap-4'>
                    <div>
                        <label htmlFor="">House Name</label>
                        <input className='form-control w-full border-2 p-2 rounded-lg border-slate-400 mt-2' {...register("houseName")} required placeholder='House Name' type='text' />
                    </div>
                    <div>
                        <label htmlFor="">Address</label>
                        <input className='form-control w-full border-2 p-2 rounded-lg border-slate-400 mt-2' {...register("Address")} required placeholder='Enter your address' type='text' />
                    </div>
                    <div>
                        <label htmlFor="">City</label>
                        <input className='form-control w-full border-2 p-2 rounded-lg border-slate-400 mt-2' {...register("city")} required placeholder='Enter Your City' type='text' />
                    </div>
                    <div>
                        <label htmlFor="">Bedrooms</label>
                        <input className='form-control w-full border-2 p-2 rounded-lg border-slate-400 mt-2' {...register("bedrooms")} required placeholder='Bedrooms' type='text' />
                    </div>
                    <div>
                        <label htmlFor="">Bathrooms</label>
                        <input className='form-control w-full border-2 p-2 rounded-lg border-slate-400 mt-2' {...register("bathrooms", { required: true })} required placeholder='Bathrooms number' type='number' />
                    </div>
                    <div>
                        <label htmlFor="">Room Size</label>
                        <input className='form-control w-full border-2 p-2 rounded-lg border-slate-400 mt-2'
                            {...register("roomSize", { required: true })} placeholder='Size Number' type='' />
                    </div>
                    <div>
                        <label htmlFor="">Picture</label>
                        <input className='form-control w-full border-2 p-2 rounded-lg border-slate-400 mt-2'
                            {...register("picture", { required: true })} required placeholder='Picture Url' type='text' />
                    </div>
                    <div>
                        <label htmlFor="">Availability Date</label>
                        <input className='form-control w-full border-2 p-2 rounded-lg border-slate-400 mt-2'
                            {...register("avaliabilityDate", { required: true })} required placeholder='Avalilability Date' type='date' />
                    </div>
                    <div>
                        <label htmlFor="">Rent Per Month</label>
                        <input className='form-control w-full border-2 p-2 rounded-lg border-slate-400 mt-2'
                            {...register("rentPerMonth", { required: true })} required placeholder='Rent Per Month' type='number' />
                    </div>
                    <div>
                        <label htmlFor="">Phone Number</label>
                        <input className='form-control w-full border-2 p-2 rounded-lg border-slate-400 mt-2'
                            {...register("phoneNumber", { required: true })} required placeholder='Phone Number' type='number' defaultValue={user?.phoneNumber} />
                    </div>

                </div>
                <div>
                    <label htmlFor="">Description</label>
                    <textarea className='form-control w-full h-24 border-2 p-2 rounded-lg border-slate-400 mt-2' {...register("description")} required placeholder='description' type='text' />
                </div>
                <input type="submit" className='border-2 p-2 rounded-lg w-full my-5 border-slate-400 text-white bg-slate-400' />
            </form>
        </div>
    );
};


export default AddHouse;