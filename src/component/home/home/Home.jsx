import React, { useEffect, useState } from 'react';
import HouseCard from './HouseCard';

const Home = () => {
    const [houses, setHouses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allHouses')
        .then(res => res.json())
        .then(data => {
            setHouses(data);
        })
        .catch(error => {
            console.log(error);
        })
    },[])
    return (
        <div className='my-20'>
            <div className='grid grid-cols-3 gap-4'>
                {
                    houses.map(house => <HouseCard key={house._id} house={house}></HouseCard>)
                }
            </div>
        </div>
    );
};

export default Home;