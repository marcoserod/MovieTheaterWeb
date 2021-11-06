import { Card, Container, Grid, Skeleton } from "@mui/material";
import { maxHeight } from "@mui/system";
import React, { useEffect, useState } from "react";
import { getMoviesByDiscovery } from "../../../services/discover";
import MovieCard from "../../molecules/MovieCard";
import { PageTemplate } from "../../templates";
import { Wrapper } from "./styles";

export const Discovery = () => {
  const [loading, setLoading] = useState(true);
  const [moviesData, setMoviesData] = useState(null);

  const handleGetMovies = async () => {
    try {
      const response = await getMoviesByDiscovery();
      const { results } = response;
      setMoviesData(results);
    } catch (error) {}
    setLoading(false);
  };

  useEffect(() => {
    handleGetMovies();
  }, []);

  return (
    <PageTemplate>
      <Wrapper>
        {loading &&
          [...Array(9).keys()].map((index) => (
            <div key={index} style={{ maxHeight: "370px" }}>
              <Skeleton
                sx={{ height: 190 }}
                animation="wave"
                variant="rectangular"
              />
              <Skeleton
                animation="wave"
                height={10}
                style={{ marginBottom: 6 }}
              />
              <Skeleton animation="wave" height={10} width="80%" />
            </div>
          ))}
        {moviesData &&
          moviesData.map((movie) => (
            <Grid key={movie.id} item>
              <MovieCard
                key={movie.id}
                title={movie.title}
                img={movie.backdrop_path}
              />
            </Grid>
          ))}
      </Wrapper>
    </PageTemplate>
  );
};
