import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-green-200 text-base-content">
            <div>
                <img className='rounded w-20 h-20' src="https://img.freepik.com/premium-vector/bakery-logo-design_260747-392.jpg" alt="" />
                <p>Online Bakery<br />Providing Homemade Fresh Food</p>
            </div>
            <div>
                <span className="footer-title">Items</span>
                <a href="/" className="link link-hover">Plain Cakes</a>
                <a href="/" className="link link-hover">Flavoured Cakes</a>


            </div>
            <div>
                <span className="footer-title">Company</span>
                <a href="/" className="link link-hover">About us</a>
                <a href="/" className="link link-hover">Contact</a>

            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a href="/" className="link link-hover">Terms of use</a>
                <a href="/" className="link link-hover">Privacy policy</a>
                <a href="/" className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;