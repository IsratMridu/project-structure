import React from 'react';
import insiderImage from '../Assets/Images/topTransparent.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const element = <FontAwesomeIcon icon={faGamepad} />






const Footer = () => {
    return (
        <>
        <div className='row mx-auto'>
            <div className='col-lg-6 col-md-6 col-sm-12 left-footer-style d-flex justify-content-center py-5'>
                <div className='text-center py-5 '>
                    <div>
                    <img src={insiderImage} alt='insider-bg-img' />
                    <div className='inner-div-style'>
                        <p className='text-white'>READY TO DO THIS</p>
                        <h1 className='text-white'>Let's get <br/> to work</h1>
                        
                    </div>
                    <button className='btn btn-outline-warning px-5 py-3'>Contact Us</button>
                    
                    </div>
                   

                </div>



            </div> 
           
            
            <div className='col-lg-6 col-md-6 col-sm-12 footer-2-style pt-5  px-5'>
                <div className='row row-cols-lg-2 row-cols-md-1 row-cols-sm-1 padding-start
                container'>
                    <div>
                        <h4 className='mb-4'>Quick Link</h4>
                        <p className='p-hover'>Work</p>
                        <p className='p-hover'>About</p>
                        <p className='p-hover'>Let's Talk</p>
                    </div>
                    <div>
                        <h4 className='mb-4'>say Hello</h4>
                        <p className='p-hover'>Admin@example.com</p>
                        <p className='p-hover'>hr@example.com</p>
                        <div className='d-flex flex-wrap pb-5'>
                            <a className='mx-2'>
                                <Link to='/faceook'>{element}</Link>
                            </a>
                            <a className='mx-2'>
                                <Link to='/instagram'>{element}</Link>
                            </a>
                            <a className='mx-2'>
                                <Link to='/linkedin'>{element}</Link>
                            </a>
                            <a className='mx-2'>
                                <Link to='/twitter'>{element}</Link>
                            </a>
                          
                            
                           
                        </div>
                    </div>


                </div>

                <div>
                    <h6 className='text-secondary text-center pb-5'>Copyright © 2021 Rainbow-Themes. All Rights Reserved.</h6>
                </div>
                

            </div> 
            
        </div>
        <div className='col-6 bg-styling'>

        </div>
        </>
    );
};

export default Footer;