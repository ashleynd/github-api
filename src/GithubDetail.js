import React from "react";
import { Button } from 'react-bootstrap';
import useFetch from "./hooks/useFetch";
import './GithubDetail.css';

const GithubDetail = () => {
  const data = useFetch("https://api.github.com/users/ashleynd");
  console.log(data.response)
  if (data.isLoading) {
    return <div>Loading...</div>;
  }
  if (data.error) {
    return <div>Sorry, something went wrong :(</div>
  }
  const { avatar_url, login, name, followers, following, location, public_repos, created_at, updated_at } = data.response;
  return (
    <div className="App">
      <div className="github">
        <h2>{login}'s Github</h2>
        <h4>Name: {name}</h4>
        <div>
          <img src={avatar_url} alt="avatar" width="150px" />
        </div>
        <p>{location}</p>
        <p>Followers: {followers}</p>
        <p>Following: {following}</p>
        <p>Public Repositories: {public_repos}</p>
        <a href="https://github.com/ashleynd?tab=repositories" target="_blank" rel="noopener noreferrer">
          <Button> Repositories </Button>
        </a>
        <p>Date created: {created_at.slice(0,10)}</p>
        <p>Last updated: {updated_at.slice(0,10)}</p>
      </div>
    </div>
  );
};

export default GithubDetail;
