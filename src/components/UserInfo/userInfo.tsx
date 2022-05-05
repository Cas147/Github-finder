import React from "react";
import { UserInterface } from "../../interfaces/user";
import moment from "moment";

import "../UserInfo/userinfo.css";

interface IUserInfo {
  userInfo: UserInterface;
}

export const UserInfoContainer = ({ userInfo }: IUserInfo): JSX.Element => {
  return (
    <div className="info-container">
      <img
        className="info-avatar"
        src={userInfo.avatar_url}
        alt="GitHub-icon"
      />
      <b>{userInfo?.name}</b>
      <p>{`@${userInfo?.login}`}</p>
      <p style={{ margin: "10px", textAlign: "center" }}>{userInfo?.bio}</p>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          className="info-icons"
          src="https://icons-for-free.com/download-icon-location-131965017472890605_256.ico"
          alt="search-icon"
        />
        <p>Location : {userInfo?.location}</p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <img
          className="info-icons"
          src="https://i.pinimg.com/originals/ff/22/c6/ff22c66b5f7d9b60ec981b2f7411ed0d.png"
          alt="search-icon"
        />
        <p>{`Member since: ${moment(userInfo?.created_at).format(
          "YYYY-MM-DD"
        )}`}</p>
      </div>
      <div className="followers-info" style={{ marginTop: "20px" }}>
        <h3 style={{ textAlign: "center" }}>Followers :</h3>
        <p style={{ textAlign: "center", fontSize: "4rem" }}>
          {userInfo?.followers}
        </p>
        <hr style={{ marginTop: "10px" }} />
        <h3 style={{ marginTop: "20px", textAlign: "center" }}>Following :</h3>
        <p
          style={{
            textAlign: "center",
            fontSize: "4rem",
          }}
        >
          {userInfo?.following}
        </p>
      </div>
      <a className="Visit-btn" href={userInfo?.html_url} target="_blank">
        Visit profile
      </a>
    </div>
  );
};
