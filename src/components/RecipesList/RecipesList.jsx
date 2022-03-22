import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import Recipe from './Recipe'

const recipesArray= [
    {recipe:'Sopas', image:'/assets/sopas.png'},
    {recipe:'Pizza', image:'/assets/pizza.png'},
    {recipe:'Pastas', image:'/assets/pasta.png'},
    {recipe:'Tacos', image:'/assets/taco.png'},
    {recipe:'Antojitos', image:'/assets/empanadas.png'},
    {recipe:'Ensaladas', image:'/assets/ensalada.png'},
    {recipe:'Bebidas', image:'/assets/bebida.png'},
]

const RecipesList = () => {

    return (
    <div>
      <Grid
        container
        direction="column"
        justifyContente="center"
        alignItems="center"
        spacing={2}
      >
        {recipesArray.map(item =>{
            return(
                <Grid item>
                    <Recipe image={item.image} recipe={item.recipe} />
                </Grid>
                
            )
        })}         

      </Grid>
    </div>
  );
};

export default RecipesList;
