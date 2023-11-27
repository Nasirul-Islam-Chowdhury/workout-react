import React from "react";
import "./Count.css";
import { GoLocation } from "react-icons/go";
import { breaks } from "../Break/Break";
import Swal from "sweetalert2";

const Count = () => {
  return (
    <div className="counting-side">
      <div className="profile">
        <div>
          <img
            src="https://scontent.fzyl1-1.fna.fbcdn.net/v/t39.30808-6/325600775_6033717506684868_8335075671536871571_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEzhsdWtrFTmy1GlhNlHcIDij44GOIWU-KKPjgY4hZT4ulXUVwwIJn5anx2x-DOZ5VdsHB0l1Ys5NvezfvG5BmU&_nc_ohc=kz88Yg-Xw1YAX9SKaHT&_nc_ht=scontent.fzyl1-1.fna&oh=00_AfDTN7dDIsV08OBlh912OqWFAuSWDvRdPrzYiCwz7MniDQ&oe=63E321FF"
            alt=""
          />
        </div>
        <div>
          <h3 className="name">Nasirul Islam Chowdhury</h3>
          <div className="tikana">
            <h3 className="logo">
              <GoLocation />
            </h3>
            Sylhet,Bangladesh
          </div>
        </div>
      </div>
      <div className="profile-second">
        <div className="quality">
          <h3>
            55<span className="spe-text">kg</span>
          </h3>
          <p>Weight</p>
        </div>
        <div className="quality">
          <h3>5.5</h3>
          <p>Height</p>
        </div>
        <div className="quality">
          <h3>
            16<span className="spe-text">yrs</span>
          </h3>
          <p>Age</p>
        </div>
      </div>
      <p className="break-text">Add A Break</p>
      <div className="time">
        <button className="time-text" onClick={(e) => breaks(e.target.innerText)}>
            10s
        </button>
        <button className="time-text" onClick={(e) => breaks(e.target.innerText)}>
            20s
        </button>
        <button className="time-text" onClick={(e) => breaks(e.target.innerText)}>
          
            <span>30</span>s
        </button>
        <button className="time-text" onClick={(e) => breaks(e.target.innerText)}>
          
            <span>40</span>s
        </button>
        <button className="time-text" onClick={(e) => breaks(e.target.innerText)}>
          
            <span>50</span>s
        </button>
      </div>
      <p className="Exercise-details">Exercise Details</p>
      <div className="time-count">
        <div className="time-header">Exercise Time</div>
        <div>
          <span id="second">00</span> seconds
        </div>
      </div>
      <div className="time-count">
        <div className="time-header">Break Time</div>
        <div>
          <span id="break-time">00</span> seconds
        </div>
      </div>
      <button
        onClick={() => Swal.fire("Activity Completed")}
        className="btn-activity"
      >
        Activity Completed
      </button>
    </div>
  );
};

const loadTime = () => {
  const oldTime = localStorage.getItem("second");
  const prevTime = JSON.parse(oldTime);

  if (prevTime) {
    document.getElementById("break-time").innerText = prevTime;
  }
};
setTimeout(() => loadTime(), 1000);

export default Count;
