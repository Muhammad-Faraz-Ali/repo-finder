import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
const RepoItem = ({ repo }) => {
  return (
    <Card
      sx={{
        maxWidth: 360,
        minWidth: 360,
        marginBottom: 2,
        ":hover": {
          boxShadow: 20, // theme.shadows[20]
          cursor: "pointer",
        },
        backgroundColor: "#D6D2CC",
      }}
    >
      <CardContent
        sx={{
          minHeight: 100,
          maxHeight: 100,
          textAlign: "center",
        }}
      >
        <Typography variant="p" component="h2">
          {repo.name}
        </Typography>
        <Typography sx={{ mt: 2 }}>{repo.description}</Typography>
      </CardContent>
      <CardActions sx={{ maxHeight: 20, marginTop: 12 }}>
        <Button
          href={repo.html_url}
          target="_blank"
          size="large"
          color="primary"
        >
          Repo Link
        </Button>
      </CardActions>
    </Card>
  );
};

export default RepoItem;
