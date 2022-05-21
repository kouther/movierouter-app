import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { Link } from "react-router-dom";
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import { CardActionArea } from '@mui/material';


const MovieCard= ({ movie }) =>{
  return(
<Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image={movie.img}
          alt={movie.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {movie.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {movie.description}
          </Typography>
          <div>
          <Typography gutterBottom variant="h6" component="div">
            {movie.year}
          </Typography>
          <Rating name="half-rating-read" defaultValue={movie.rate} precision={0.5} readOnly /></div>



          <Link style={{color:"#f2090a", fontWeight: 700}} to={`/movie/${movie.id}`}><MovieCreationIcon/> See more</Link>

        </CardContent>
      </CardActionArea>

    </Card>
  );
};
export default MovieCard;
