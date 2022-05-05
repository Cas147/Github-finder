import React from "react";
import { Link } from "react-router-dom";
import api from "../Service/userApi";

import Swal from "sweetalert2";
import "../components/styles/Home.css";
import { UserInterface } from "../interfaces/user";
import { UserInfoContainer } from "../components/UserInfo/userInfo";
import { UserRepositories } from "../components/Repositories/Repositories";

export const Home = () => {
  const [username, setUsername] = React.useState("");
  const [userInfo, setUserInfo] = React.useState<UserInterface>({});

  async function searchUser(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (username !== "") {
      try {
        const { data } = await api.get(`${username}`).then();

        setUserInfo(data);
      } catch (error) {
        setUsername("");
        setUserInfo({});
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "This user doesn't exist",
        });
      }
    }
    return;
  }

  return (
    <main className="container">
      <div className="GitHub">
        <div className="title">
          <h1>Github finder</h1>
          <p>Search for a user to see profile details.</p>
        </div>
        <img
          className="GitHub-icon"
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt="GitHub-icon"
        />
      </div>
      <div className="wrap">
        <form onSubmit={(event) => searchUser(event)}>
          <div className="search">
            <input
              type="text"
              className="searchTerm"
              placeholder="Search user..."
              onChange={(event: {
                target: { value: React.SetStateAction<string> };
              }) => setUsername(event.target.value)}
              value={username}
            />
            <button type="submit" className="searchButton">
              <img
                className="fa-search"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxICY7v8a7DbKB_BebFIRbnOoPCX4O92hBcMKjVIDm8fLSc-Id0ndJWYMo57-VdTTIYA0&usqp=CAU"
                alt="search-icon"
              />
            </button>
          </div>
        </form>
      </div>
      {Object.keys(userInfo).length > 0 && (
        <div className="user-container">
          <UserInfoContainer userInfo={userInfo} />
          <UserRepositories
            username={username}
            publicRepos={userInfo.public_repos}
            publicGists={userInfo.public_gists}
          />
        </div>
      )}
    </main>
  );
};
