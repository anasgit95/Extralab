import * as React from 'react';
import Grid from '@mui/material/Grid';
 
 import Card from '../../components/CardMovie'
export default function MoviesList({movies}) {
 
 

  
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          {movies.map((movie) => (
            <Grid key={movie} item >
            <Card movie={movie}/>
            </Grid>
          ))}
        </Grid>
      </Grid>
 
    </Grid>
  );
}