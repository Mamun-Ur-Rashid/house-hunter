import { useEffect, useState } from 'react';
import axios from 'axios';

const useHouseOwner = (email) => {
    const [isHouseOwner, setIsHouseOwner] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHouseOwner = async () => {
            try {
                const response = await axios.get(`/users/houseOwner/${email}`);
                setIsHouseOwner(response.data.isHouseOwner);
            } catch (error) {
                setError(error.message || 'An error occurred while fetching house owner information');
            } finally {
                setLoading(false);
            }
        };

        if (email) {
            fetchHouseOwner();
        }

    }, [email]);

    return { isHouseOwner, loading, error };
};

export default useHouseOwner;
