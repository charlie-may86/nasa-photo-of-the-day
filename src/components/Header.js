import React from 'react';

const Header = (props) => {

    const { date, title } = props;

    return (
        <header className = 'header'>
            <h1>
                NASA Photo of the Day {date}
            </h1>
            <h2>
                {title}
            </h2>
        </header>
    )
}

export default Header;