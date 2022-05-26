import React from "react";
import useFetch from "./hooks/useFetch";

const GithubDetail = () => {
  const data = useFetch("https://api.github.com/users/ashleynd");
  console.log(data.response)
  if (data.isLoading) {
    return <div>Loading...</div>;
  }
  if (data.error) {
    return <div>Sorry, something went wrong :(</div>
  }
  const { avatar_url, login } = data.response;
  return (
    <div className="App">
      <div>
        <h3>{login}</h3>
        <div>
          <img src={avatar_url} alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default GithubDetail;
