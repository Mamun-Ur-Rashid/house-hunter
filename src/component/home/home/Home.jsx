import React, { useEffect, useState } from 'react';
import HouseCard from './HouseCard';

const Home = () => {
    const [houses, setHouses] = useState([]);
    useEffect(() => {
        fetch('https://odd-pink-rattlesnake-veil.cyclic.app/allHouses')
        .then(res => res.json())
        .then(data => {
            setHouses(data);
        })
        .catch(error => {
            console.log(error);
        })
    },[])
    return (
        <div className=''>
            <div className='mb-20'>  <img className='w-screen h-[500px]' src="https://i.ibb.co/8s2DXKS/rent.jpg" alt="" /></div>
            <div className='grid grid-cols-3 gap-4'>
                {
                    houses.map(house => <HouseCard key={house._id} house={house}></HouseCard>)
                }
            </div>
        </div>
    );
};

export default Home;