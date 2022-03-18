import React, { useState  } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Close from '@mui/icons-material/Close';


import Grid from '@mui/material/Grid';
export default function Search({searchButton}) {


  const [search, setSearch] = useState("");
 const searchButtonClick = (e)=>{
 e.preventDefault()
 searchButton(search)
 }
 const clearSearch = (e)=>{
  e.preventDefault()
  setSearch("")
  searchButton("")

  }
  
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2} style={{marginTop:20}}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          
          <Paper
            className="searchButton"
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 500 }}
          >

            <InputBase
            onChange={(e)=>setSearch(e.target.value)}
              sx={{ ml: 1, flex: 1 }}
              value={search}
              placeholder="Rechercher un film"
              inputProps={{ 'aria-label': 'Rechercher un film' }}
            />
             <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={searchButtonClick}>
              <SearchIcon />
            </IconButton>
           {
           search===""?
             null
            :<IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={clearSearch}>
              <Close />
            </IconButton>}
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

          </Paper>
          
        
        </Grid>
      </Grid>

    </Grid>

  );
}