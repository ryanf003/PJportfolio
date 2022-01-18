import React from 'react';

function IconBarComponent() {
    return(
        <div className="buttons">
            <ul className="navbar-nav">
                <li className="navLink">
                    <a href="https://www.instagram.com/pj_fdz/"><span className='icon'><i className="fa fa-instagram" /></span></a>{' '}
                </li>
                <li className="navLink">
                    <a href="https://www.facebook.com/PjFdzPhoto"><span className='icon'><i className="fa fa-facebook-square" /></span></a>{' '}
                </li>
            </ul>
        </div>
    );
}

export default IconBarComponent;