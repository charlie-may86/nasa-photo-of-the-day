import React from 'react';

const Header = (props) => {

    const { date } = props;

    return (
        <header className = 'header'>
            <h1>
                NASA Photo of the Day {date}
            </h1>
        </header>
    )
}

export default Header;