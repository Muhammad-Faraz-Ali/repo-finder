import { useState } from "react";
import "./App.css";
import SearchBar from "./components/search/SearchBar";
import { fetchPublicRepos } from "./network/http";
import ReposList from "./components/repos/ReposList";
const App = () => {
  const [fetchedRepos, setFetchedRepos] = useState([]);
  const [validUserName, setValidUserName] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSearch = async (username) => {
    setLoading(true);
    let url = `https://api.github.com/users/${username}/repos`;
    const { repos, apiError: error } = await fetchPublicRepos(url);

    if (!error) {
      setValidUserName(true);
      setFetchedRepos(repos);
    } else {
      setValidUserName(false);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      {!loading && (
        <ReposList
          repos={fetchedRepos}
          validUserName={validUserName}
          loading={loading}
        />
      )}
      {loading && (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
};

export default App;
