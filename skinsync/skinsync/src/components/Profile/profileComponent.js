import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'; // Updated to use useNavigate
import { PencilIcon, TrashIcon } from '@heroicons/react/solid';

const ProfileComponent = () => {
    const { id } = useParams(); // Assuming you're passing the profile ID via route params
    const navigate = useNavigate(); // Updated to useNavigate
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch the profile data
        const fetchProfile = async () => {
            try {
                const { data } = await axios.get(`/api/profile/${id}`);
                setProfile(data);
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch profile data');
                setLoading(false);
            }
        };

        fetchProfile();
    }, [id]);

    const handleEdit = () => {
        navigate(`/profile/edit/${id}`); // Updated to use navigate
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`/api/profile/${id}`);
            navigate('/profiles'); // Redirect to profiles list after deletion using navigate
        } catch (error) {
            setError('Failed to delete profile');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Profile Details</h1>
            <div className="bg-white shadow-md rounded-lg p-6 mb-4">
                <div className="mb-4">
                    <h2 className="text-lg font-semibold">Name</h2>
                    <p>{profile.name}</p>
                </div>
                <div className="mb-4">
                    <h2 className="text-lg font-semibold">Email</h2>
                    <p>{profile.email}</p>
                </div>
                <div className="mb-4">
                    <h2 className="text-lg font-semibold">Phone</h2>
                    <p>{profile.phone}</p>
                </div>
                {/* Add more profile details as needed */}
            </div>
            <div className="flex space-x-2">
                <button 
                    onClick={handleEdit} 
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
                >
                    <PencilIcon className="h-5 w-5 mr-2" />
                    Edit Profile
                </button>
                <button 
                    onClick={handleDelete} 
                    className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700"
                >
                    <TrashIcon className="h-5 w-5 mr-2" />
                    Delete Profile
                </button>
            </div>
        </div>
    );
};

export default ProfileComponent;
