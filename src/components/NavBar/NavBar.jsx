import React from "react";
import { Grid } from "@mui/material";
import {colors, sizes} from '../../css/CONSTANTS'
const NavBar = (props) => {
  const aStyle = {margin:'0px 25px 0px 25px', textDecoration:'none', fontWeight:'700', color:'black', fontSize:sizes.navigation}
    const { matches } = props;
  return (
    <div style={{width:'100%', marginTop:'30px'}}>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        style={{
            display:'flex',
          flexDirection: "row",
          justifyContent: `${matches ? "flex-start" : "center"}`,
          alignItems: "center",
        }}
      >
        <img src="/assets/logo.png" alt="App logo" />
        {matches ? (
          <div>
              <a style={aStyle} href="/">¿Cómo funciona recetario IA?</a>
            
              <a style={aStyle} href="/">¡Quiero contribuir!</a>
           
              <a style={aStyle} href="/">Sponsor</a>
          </div>
        ) : (
          <button> Click aquí</button>
        )}
      </Grid>
    </div>
  );
};

export default NavBar;
