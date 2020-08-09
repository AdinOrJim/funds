import React, {useState, useEffect} from 'react';
import '../css/Footer.css'

function Footer() {
    
            let clock = new Date().toLocaleString();
           
    return (
        <div className="Footer">
            <p>
                Adin O copyright 2020
            </p>
            <p>
                {clock}
            </p>
        </div>
    )
}

export default Footer;