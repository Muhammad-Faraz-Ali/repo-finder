import React from "react";
import UserCard from "../UI/UserCard";
import RepoItem from "./RepoItem";
import { Card, Typography, Grid } from "@mui/material";

const ReposList = ({ repos, validUserName, loading }) => {
  let content = "";
  if (!loading && validUserName && repos.length !== 0) {
    content = (
      <div>
        <div>
          <h2>User Profile:</h2>
          <UserCard user={repos[0]} />
        </div>
        <h2>User Repos:</h2>

        <Grid container>
          {repos.map((repo) => {
            return (
              <Grid item xs={12} sm={6} md={3} key={repo.id}>
                <RepoItem repo={repo} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }

  if (!validUserName && !loading && repos.length !== 0) {
    return (content = (
      <Card sx={{ marginTop: 2 }}>
        <Typography variant="p" component="h5" sx={{ p: 2, color: "red" }}>
          Please enter a valid user name
        </Typography>
      </Card>
    ));
  }

  return <div>{content}</div>;
};
export default ReposList;
