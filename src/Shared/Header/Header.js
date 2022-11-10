import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="navbar bg-base-100 mb-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li> <Link to='/services'>Items</Link>
                        </li>
                        <li><Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>
                <img className='h-20 w-20' src="https://img.freepik.com/premium-vector/bakery-logo-design_260747-392.jpg" alt="" />
                <Link className='btn btn-ghost normal-case text-xl' to='/home'>Online Bakery</Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/items'>Items</Link></li>

                    <li><Link to='/blog'>Blog</Link></li>
                </ul>
            </div>
            <div className="navbar-end mr-20">
                {
                    user?.email?
                    <>
                    <Link to='/logout'><button className='btn btn-ghost '>Log Out</button></Link>
                    </>
                    :
                    <Link to='/login'><button className='btn btn-ghost '>Log in</button></Link>
                }
            </div>
        </div>
    );
};

export default Header;