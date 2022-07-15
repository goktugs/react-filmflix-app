import React, { useState, useEffect } from 'react';
import {
  Box,
  CircularProgress,
  useMediaQuery,
  Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { MovieList } from '..';
import { useGetMoviesQuery } from '../../services/TMBD';

export default function Movies() {
  const { data, error, isFetching } = useGetMoviesQuery();

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          No movies matched <br />
          Please search something else!!
        </Typography>
      </Box>
    );
  }

  if (error) {
    return 'Error accured';
  }

  console.log(data);

  return (
    <div>
      <MovieList movies={data} />
    </div>
  );
}
