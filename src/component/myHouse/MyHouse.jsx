import React, { useEffect, useState } from 'react';
import { useAuth } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';

const MyHouse = () => {
    const {user} = useAuth();
    console.log(user)
    const [house, setHouses] = useState([]);

    useEffect( () => {
        fetch(`http://localhost:5000/houses/${user?.phoneNumber}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setHouses(data);
        })
        .catch(error => {
            console.log(error);
        })
    },[user])
    return (
        <div className='container my-16'>
            <h1 className='text-center text-3xl font-bold my-5'>My Houses</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead className='border bg-slate-100 p-4 gap-2'>
                        <tr>
                            <th></th>
                            <th>House Name</th>
                            <th>Picture</th>
                            <th>City</th>
                            <th>Rent Per Month</th>
                            <th>Address</th>
                            <th>PhoneNumber</th>
                            <th>Bedrooms</th>
                            <th>Bathrooms</th>
                            <th>RoomSize</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            house?.map((singleHouse, index) => (
                                <tr className='border bg-gray-300 gap-2' key={singleHouse._id}>
                                    <td>{index + 1}</td>
                                    <td>{singleHouse.houseName}</td>
                                    <td><img className='h-14 w-24' src={singleHouse.picture} alt="" /></td>
                                    <td>{singleHouse.city}</td>
                                    <td>{singleHouse.rentPerMonth}</td>
                                    <td>{singleHouse.address}</td>
                                    <td>{singleHouse.phoneNumber}</td>
                                    <td>{singleHouse.bedrooms}</td>
                                    <td>{singleHouse.bathrooms}</td>
                                    <td>{singleHouse.roomSize}</td>
                                    <td><Link to={`/updateTo/${singleHouse._id}`}><button className='btn btn-outline'>Update</button></Link></td>
                                    <td><button onClick={() => handleDelete(singleHouse._id)} className='btn btn-outline'>Delete</button></td>
                                    <td>{singleHouse.description}</td>
                                </tr>))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyHouse;