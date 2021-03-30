import React from "react";

const Footer = (props) => {

    const { copyright } = props;
    
    return (
        <footer className = 'footer' >
            <p>
                Photo copyright and courtsey of {copyright}
            </p>
        </footer>
    )
}

export default Footer;