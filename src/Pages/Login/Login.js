import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const {login} = useContext(AuthContext);

    const handleLogIn = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.log(err))  
    
        }

    
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row ">
                <div >

                    <img className='shadow-2xl bg-base-100' src='https://i2-prod.nottinghampost.com/incoming/article6856252.ece/ALTERNATES/s1200c/0_JAJ_TEM_240322RotariCakes_001JPG.jpg' alt=''></img>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10 ">
                    <form onSubmit={handleLogIn} className="card-body">
                        <h1 className="text-3xl font-bold text-center">Login <br />&<br />Grab your cake!!!</h1><br />

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />

                        </div>
                    </form>
                    <p className='text-center'>New to this site? <Link className='text-orange-500' to='/signup'>Sign up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;