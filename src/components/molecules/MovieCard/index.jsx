import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import PropTypes from "prop-types";

export default function MovieCard({ img, title }) {
  return (
    <Card>
      <CardActionArea style={{ height: "100%" }}>
        <CardMedia
          component="img"
          height="auto"
          image={`https://image.tmdb.org/t/p/w500${img}`}
          alt={title}
        />
        <CardContent>
          <Typography noWrap gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

MovieCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
