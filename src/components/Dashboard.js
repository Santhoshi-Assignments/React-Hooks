import React, { useContext } from 'react';
import Profile from './Profile';

import { UserContext } from '../App';
const Dashboard = () => {
    const { loading, error, profileData } = Profile();
    const { username } = useContext(UserContext);
 
    if (loading) {
        return <div>Loading...</div>;
    }
 
    if (error) {
        return <div>Error: {error}</div>;
    }
 
    return (
        <div>
            <h1>Dashboard</h1>
            <h3>Hello {username}</h3>
            <p>Name: {profileData.name}</p>
            <p>Country: {profileData.country}</p>
            <p>Gender: {profileData.gender}</p>
            <p>PAN: {profileData.pan}</p>
        </div>
    );
};
 
export default Dashboard;