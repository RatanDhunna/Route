import { NavLink, Outlet } from 'react-router-dom';

const Browse = () => {
    return (
        <>
            <header className="navbar">
                <img src="/logo192.png" alt="Logo" style={{height: '40px', marginRight: '18px'}} />
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/userInfo">User Info</NavLink>
                <NavLink to="/about">About</NavLink>
            </header>
            <Outlet />
        </>
    );
};

export default Browse;