import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Header from './HeaderComponent';


function About(props) {

    

    return (
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>About Us</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>About Us</h2>
                        <hr />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <img className="d-block img-thumbnail"src='/assets/img/pfp.jpg' alt="About Page" />
                    </div>
                    <div className='col-md-8 contact-info'>
                        <h5>Contact</h5>
                        <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" />  408-518-2310</a><br />
                        <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> pj_fdz_photo@yahoo.com</a>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default About;