import * as React from 'react';
import Grid from '@mui/material/Grid';
 
import Paper from '@mui/material/Paper';
import Card from '../../components/CardMovie'
export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const jsx = `
<Grid container spacing={${spacing}}>
`;

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          {[0, 1, 2,4,12].map((value) => (
            <Grid key={value} item>
            <Card/>
            </Grid>
          ))}
        </Grid>
      </Grid>
 
    </Grid>
  );
}