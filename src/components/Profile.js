import { useEffect, useReducer } from 'react';
 
const mockApi = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: 'Santhoshi',
                country: 'India',
                gender: 'female',
                pan: 'SJWH8927897564'
            });
        }, 2000);
    });
};
 
const profileReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                ...state,
                loading: false,
                profileData: action.payload
            };
        case 'FETCH_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};
 
const Profile = () => {
    const [state, dispatch] = useReducer(profileReducer, {
        loading: true,
        error: null,
        profileData: {}
    });
 
    useEffect(() => {
        let isMounted = true;
        mockApi()
            .then(data => {
                if (isMounted) {
                    dispatch({ type: 'FETCH_SUCCESS', payload: data });
                }
            })
            .catch(error => {
                if (isMounted) {
                    dispatch({ type: 'FETCH_ERROR', payload: error.message });
                }
            });
 
        return () => {
            isMounted = false;
        };
    }, []);
 
    return state;
};
 
export default Profile;
 
