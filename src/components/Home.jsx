import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProviders';

const Home = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <h2>Home</h2>
            <p>This is home {user && <span>{user.displayName}</span>}</p>
        </div>
    );
};

export default Home;