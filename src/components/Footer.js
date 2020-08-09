import React from 'react';
import '../css/Footer.css'

function Footer() {
    let currentDate = new Date().toLocaleString();
    return (
        <div className="Footer">
            <p>
                Adin O copyright 2020
            </p>
            <p>
                {currentDate}
            </p>
        </div>
    )
}

export default Footer;