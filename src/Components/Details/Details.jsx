const detail = (time, btnId) => {
    const field = document.getElementById("second");
    const prevSecond = parseInt(field.innerText);
    const newSecond = prevSecond + parseInt(time);
    field.innerText= newSecond;
    const buttons = document.getElementsByClassName("btn-add");
    for(const button of buttons){
        if(btnId === button.getAttribute("id")){
            button.disabled = true;
            button.innerText = "Added";
            button.style.backgroundColor = "rgb(0, 255, 170" 
        }
    }
}
export {detail};