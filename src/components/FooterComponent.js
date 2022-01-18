import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col-sm-4">
                        <ul className="footer-links list-middot">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/aboutus">About</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 ">
                        <p>PJ_Fdez Photography © 2018-2022</p>
                    </div>
                    <div className="col-6 col-sm-4 text-center">
                        <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/pj_fdz/"><i className="fa fa-instagram" /></a>{'   '}
                        <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/PjFdzPhoto"><i className="fa fa-facebook-square" /></a>{'  '}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;