import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const UserCard = ({ user }) => {
  return (
    <Card
      sx={{
        minWidth: 345,
        maxWidth: 345,
        ":hover": {
          boxShadow: 20,
          cursor: "pointer",
        },
      }}
    >
      <CardActionArea href={user.owner.html_url} target="_blank">
        <CardMedia component="img" height="240" image={user.owner.avatar_url} />
        <CardContent>
          <Typography sx={{ textAlign: "center" }} variant="p" component="h2">
            {user.owner.login}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default UserCard;
