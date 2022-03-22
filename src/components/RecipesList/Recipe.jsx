import React from 'react';
import {colors, sizes} from '../../css/CONSTANTS'
const boxStyle = {
    margin:'0px 0px 0px 0px',
    display:'flex',
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor:`${colors.secondary}`,
    border:`solid ${colors.lightBorder} 1px`,
    borderRadius:'50px',
    width:'200px'
}
const spanAndImage = {
    margin:'0px 20px 0px 20px',
    backgroundColor:'white',
    border:'0px', 
    borderRadius:'50%',
    width:'50px', 
    height:'50px', 
    display:'flex', 
    justifyContent: 'center',
    alignItems:'center',
    
}

const imageStyle = {
    width:'50%',
    height:'auto'
}
const pStyle={
    color:'black',
    fontSize: `${sizes.recipes}`
}

const Recipe = (props)=>{
    const {recipe, image} = props;
    return (
        <div style={boxStyle}>
            <span style={spanAndImage}>
                <img src={image} style={imageStyle} />
            </span>
            <p style={pStyle}>{recipe}</p>
        </div>
    )
}
export default Recipe;