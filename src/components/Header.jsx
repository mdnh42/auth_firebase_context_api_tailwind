import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProviders';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);


    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }

    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <button className="btn btn-ghost text-xl">daisyUI</button>
                <Link className="btn btn-ghost text-xl" to="/">Home</Link>
                <Link className="btn btn-ghost text-xl" to="/orders">Orders</Link>
                {
                    user && <Link className="btn btn-ghost text-xl" to="/profile">Profile</Link>
                }
                <Link className="btn btn-ghost text-xl" to="/login">Login</Link>
                <Link className="btn btn-ghost text-xl" to="/register">Register</Link>
                {
                    user ? <>
                        <span>{user.email}</span>
                        <button onClick={handleLogout} className='btn btn-xs'>Sign Out</button>
                    </> :
                        <> <Link to="/login">Login</Link></>
                }
            </div>
        </div>
    );
};

export default Header;