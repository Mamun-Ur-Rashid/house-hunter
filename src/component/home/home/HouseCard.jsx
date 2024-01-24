import React from 'react';

const HouseCard = ({house}) => {
    const {houseName, phoneNumber, picture, rentPerMonth, city, Address, roomSize, bedrooms, bathrooms, avaliabilityDate, description} = house;
    return (
        <div>
            <div className='w-96 h-[460px] bg-slate-100 shadow-md mx-auto'>
                <div>
                    <img className='w-full h-[200px]' src={picture} alt="" />
                </div>
                <div>
                    <div className='p-4 font-semibold'>
                        <h4>HouseName: {houseName}</h4>
                        <p>Rent Per Month: {rentPerMonth} BDT</p>
                        <p>Room Size: {roomSize} Q/F</p>
                        <p>BedRooms: {bedrooms}</p>
                        <p>Address : {Address}</p>
                        <p>Description: {description}</p>
                        <button className='border my-4 px-2 bg-gray-500 text-white hover:bg-gray-700 rounded-md p-1'>Booking Now</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HouseCard;