import React from 'react';
import {Grid, Box, Typography} from '@mui/material';
import {sizes, colors} from '../../css/CONSTANTS';
const BoxHero = () =>{
    const leftSpace = "50px";
    return (
    <>
    <Box sx={{ backgroundColor: colors.primary, border:'0px', borderRadius:'40px', marginTop:'50px' }}>
              <Grid
                container
                direction="row"
                justifyContente="center"
                alignItems="center"
              >
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                  <Typography  style={{ fontSize: sizes.header, fontWeight:'600', marginLeft: leftSpace }}>
                    Recetario IA
                  </Typography>
                  <Typography varint="body" sx={{ fontWeight:'300', fontSize: sizes.subheader, marginLeft: leftSpace }}>
                    Tu solución perfecta para aprender a cocinar la receta de
                    spaguetti a la boloñesa que viste en Youtube
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                  <img src="/assets/cookingWoman.png" alt="Cooking woman" style={{margin:'0px 0px 0px 150px'}} />
                </Grid>
              </Grid>
    </Box>
    </>
)
}

export default BoxHero;