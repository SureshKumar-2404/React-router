import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
    const { userId } = useParams();
    console.log('userId--------', userId);

    // Convert userId to string explicitly if necessary
    const userIdAsString = String(userId);

    return (
        <div className='bg-gray-600 text-white text-3xl p-4'>
            User: {userIdAsString}
        </div>
    );
}

export default User;
