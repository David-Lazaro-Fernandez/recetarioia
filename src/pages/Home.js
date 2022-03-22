//React imports
import React, { useState, useEffect } from "react";
//Components
import NavBar from "../components/NavBar/NavBar";
import BoxHero from "../components/BoxHero/BoxHero";
import RecipesList from "../components/RecipesList/RecipesList";
//MUI components
import { Grid, Container, Box, Typography } from "@mui/material";
//MUI Hooks
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
//Css Constants
import { colors, sizes } from "../css/CONSTANTS";
const Home = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
    const styleStart = {
        display:'flex',
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
  return (
    <div style={{ backgroundColor: `${colors.secondary}` }}>
      <Container maxWidth="lg">
        <Grid
          container
          direction="column"
          justifyContente="center"
          alignItems="center"
        >
          <NavBar matches={matches} />
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <BoxHero />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{width:'100%', marginTop:'35px'}}>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              style={{width:'100%'}}
            >
              <Grid item xs={0} sm={0} md={3} lg={3} xl={3} style={styleStart}>
                <RecipesList />
              </Grid>
              <Grid item xs={0} sm={0} md={6} lg={6} xl={6} style={styleStart}>
                
              </Grid>
              <Grid item xs={0} sm={0} md={3} lg={3} xl={3} style={styleStart}>
                <RecipesList />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
