import React from "react";


const Photo = (props) => {

    const { photo, info } = props;
    
    return (
        <div className = 'photo'>
            <div className = 'photoDiv'>
                <img src = {photo} alt=""/>
            </div>
            <div className = 'explanation'>
                <p>
                    {info}
                </p>
            </div>
        </div>
    )
}

export default Photo;