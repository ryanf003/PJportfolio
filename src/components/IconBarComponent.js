import React from 'react';

function IconBarComponent() {
    return(
        <div className="buttons">
            <ul className="navbar-nav">
                <li className="navLink">
                    <a href="http://instagram.com/"><span className='icon'><i className="fa fa-instagram" /></span></a>{' '}
                </li>
                <li className="navLink">
                    <a href="http://www.facebook.com/"><span className='icon'><i className="fa fa-facebook-square" /></span></a>{' '}
                </li>
                <li className="navLink">
                    <a href="http://twitter.com/"><span className='icon'><i className="fa fa-twitter" /></span></a>{' '}
                </li>
                <li className="navLink">
                    <a href="http://youtube.com/"><span className='icon'><i className="fa fa-youtube" /></span></a>
                </li>
            </ul>
        </div>
    );
}

export default IconBarComponent;