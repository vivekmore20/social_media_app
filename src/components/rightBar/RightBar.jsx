import React from 'react';
import "./rightBar.scss";
import Friends from "../../assets/1.png";
const rightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestion for you</span>
          <div className="user">
            <div className="userInfo">
              <img src={Friends} alt=""/>
              <span>Vinay Salunkhe</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Friends} alt=""/>
              <span>Hemant Patil</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>


        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src={Friends} alt=""/>
              <p>
                <span>Vinay Salunkhe</span>
                changed their profile picture
                </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Friends} alt=""/>
              <p>
                <span>Vinay Salunkhe</span>
                changed their profile picture
                </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src={Friends} alt=""/>
              <p>
                <span>Vinay Salunkhe</span>
                changed their profile picture
                </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src={Friends} alt=""/>
              <p>
                <span>Vinay Salunkhe</span>
                changed their profile picture
                </p>
            </div>
            <span>1 min ago</span>
          </div>

        </div>

        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src={Friends} alt=""/>
              <div className="online"></div>
              <span>Hemant Patil</span>
            </div>
           
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Friends} alt=""/>
              <div className="online"></div>
              <span>Hemant Patil</span>
            </div>
           
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Friends} alt=""/>
              <div className="online"></div>
              <span>Hemant Patil</span>
            </div>
           
          </div><div className="user">
            <div className="userInfo">
              <img src={Friends} alt=""/>
              <div className="online"></div>
              <span>Hemant Patil</span>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default rightBar