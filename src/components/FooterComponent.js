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
                            <li><Link to="/directory">Directory</Link></li>
                            <li><Link to="/aboutus">About</Link></li>
                            <li><Link to="/home">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-sm-4 ">
                        <p>PJ_Fdez Photography © 2018-2022</p>
                        
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;