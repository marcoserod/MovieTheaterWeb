import { Card, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getMoviesByDiscovery } from "../../../services/discover";
import MovieCard from "../../molecules/MovieCard";
import { PageTemplate } from "../../templates";
import { Wrapper } from "./styles";

export const Discovery = () => {
  const [moviesData, setMoviesData] = useState(null);

  const handleGetMovies = async () => {
    try {
      const response = await getMoviesByDiscovery();
      const { results } = response;
      setMoviesData(results);
    } catch (error) {}
  };

  useEffect(() => {
    handleGetMovies();
  }, []);

  return (
    <PageTemplate>
      <Wrapper>
        {moviesData
          ? moviesData.map((movie) => (
              <Grid key={movie.id} item>
                <MovieCard
                  key={movie.id}
                  title={movie.title}
                  img={movie.backdrop_path}
                />
              </Grid>
            ))
          : null}
      </Wrapper>
    </PageTemplate>
  );
};
