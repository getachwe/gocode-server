import './Header.css';
import ProductContext from "./ProductContext";
import { useContext } from "react";
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
function Header({value ,handleChange , myChoice, categories }){

  const useStyles = makeStyles({
    root: {
      width: 300,
    },
  });
  function valuetext(value) {
    return `${value}°C`;
  }

  
    return( <nav class="product-filter">
    <h1>Jackets</h1>
    <div class="sort">
    
      <div class="collection-sort">
      
        <label>Filter by:</label>
        <select onChange= {(e) =>myChoice(e.target.value)}>
        <option value="All categories"> All categories </option>
       {categories.map(categories => <option>{categories}</option>)} 
       </select>
      </div>
      <div >
      <Typography id="range-slider" gutterBottom>
        Temperature range
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
      <div class="collection-sort">
        <label>Sort by:</label>
        <select>
        <option value="id,1">Featured</option>
        <option value="id,-1">New Arrival</option>
        <option value="title,1">Alphabetically, A-Z</option>
        <option value="title,-1">Alphabetically, Z-A</option>
        <option value="price,1">Price, low to high</option>
        <option value="price,-1">Price, high to low</option>
        </select>
      </div>
    </div>
  </nav>)} 
export default Header;