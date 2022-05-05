import React from "react";
import { RepoInterface } from "../../interfaces/repositories";
import api from "../../Service/userApi";
import moment from "moment";

import "../Repositories/repositories.css";

interface IUserRepos {
  username: string;
  publicRepos?: number;
  publicGists?: number;
}

export const UserRepositories = ({
  username,
  publicRepos,
  publicGists,
}: IUserRepos): JSX.Element => {
  const [repositories, setRepositories] = React.useState<RepoInterface[]>([]);

  async function searchRepos(dev: string) {
    const response = await api.get(`${dev}/repos`).then();
    setRepositories(response.data);
  }

  React.useEffect(() => {
    if (username !== "") {
      searchRepos(username);
    }
  }, [username]);

  console.log(repositories);
  return (
    <div className="repos-container">
      <div className="repos">
        <div className="public">
          <p>Public repos</p>
          <p>{publicRepos}</p>
        </div>
        <div className="public">
          <p>Public gists</p>
          <p>{publicGists}</p>
        </div>
      </div>
      <div className="repo-info--container">
        {repositories.map((repo: RepoInterface) => {
          return (
            <div className="repo-info">
              <div className="repo-description">
                <h4>{repo.name}</h4>
                <p>{repo.description}</p>
                <small>{repo.language}</small>
              </div>
              <div className="repo-counts">
                <div className="counts-container">
                  <div className="counts">
                    <img
                      src="https://static.thenounproject.com/png/1154303-200.png"
                      alt="search-icon"
                    />
                    <p>{repo.forks}</p>
                    <img
                      src="https://cdn.iconscout.com/icon/free/png-256/star-bookmark-favorite-shape-rank-16-28621.png"
                      alt="search-icon"
                    />
                    <p>{repo.stargazers_count}</p>
                    <img
                      src="https://cdn.picpng.com/eye/eye-icon-vector-symbol-look-47761.png"
                      alt="search-icon"
                    />
                    <p>{repo.watchers_count}</p>
                  </div>
                </div>
                <a className="more-btn" href={repo.html_url} target="_blank">
                  See more
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
