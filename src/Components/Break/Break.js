import React from 'react';

const breaks = (props) => {
    const breakTime = document.getElementById("break-time")
    // local storage
    localStorage.setItem("second", JSON.stringify(props));
    breakTime.innerText = props;
    return (
        <div>
            
        </div>
    );
};

export {breaks};
