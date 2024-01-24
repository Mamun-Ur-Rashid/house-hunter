import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='my-10 bg-[#787885] text-white p-6'>
            <footer className="footer p-10  text-white grid grid-cols-4">
                <div>
                    <img className='h-10' src=""  alt="" />
                    <p>House Hunter<br />Providing reliable tech since 2002</p>
                    <p>Banani 1212</p>
                    <p>Contact:</p>
                    <p className='inline-flex items-center gap-2'> +880 01945829635</p>
                    <p className='inline-flex items-center gap-2'> +96800715222 </p>
                    
                </div>
                <div className='grid grid-cols-1'>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Houses</a>
                    <a className="link link-hover">Best Tennis Selling</a>
                    <a className="link link-hover">Online Booking</a>
                    <a className="link link-hover">Good Services</a>
                </div>
                <div>
                    <span className="footer-title">Open/Off <br />Saturday Week end</span>
                    <a className="link link-hover">Sunday  -8am to 10pm</a>
                    <a className="link link-hover">Monday  -8am to 8pm</a>
                    <a className="link link-hover">Tuesday  -8am to 10pm</a>
                    <a className="link link-hover">Wednesday  -10am to 10pm</a>
                    <a className="link link-hover">Thusday  -8am to 11pm</a>
                    <a className="link link-hover">Friday  -8am to 12am</a>

                </div>
                <div>
                    <span className="footer-title">Subscribe <br /> House Hunter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                            <div className="social-links inline-flex items-center mt-4 gap-4 text-2xl">
                                <a href="https://twitter.com/">
                                
                                </a>
                                <a href="https://www.instagram.com/">
                                </a>
                                <a href="https://www.m.facebook.com/">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
            <div>
                <p className='text-center'>Copyright © 2023 - All right reserved by House Hunter</p>
            </div>
        </div>
    );
};
export default Footer;