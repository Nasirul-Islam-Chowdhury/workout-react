const breaks = (props) => {
    const breakTime = document.getElementById("break-time")
    // local storage
    localStorage.setItem("second", JSON.stringify(props));
    breakTime.innerText = props;
};

export {breaks};
