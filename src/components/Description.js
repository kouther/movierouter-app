import React, { useEffect, useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Rating from '@mui/material/Rating';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import {Link } from 'react-router-dom';

const Description = (props) => {
    console.log("#p", props)
    const [movie, setMovie] = useState(null)
    useEffect(
        () => {
            setMovie(
                props.movies.filter(
                    (el) => el.id === props.match.params.MovieId
                )[0]
            )
        }
    )
    return (
        <div>
                        <Link to="/" style={{color: "#f2090a"}}> <ArrowCircleLeftIcon /> Retour</Link>
                        <hr></hr>

            {
                movie &&  <React.Fragment>
                <CssBaseline />
                <Container maxWidth="100%">
                  <Box sx={{  height: '100%' }} >
                      <div style={{clear:"both"}}>
                          <Rating style={{float: "left",marginRight: 5}} name="half-rating-read" defaultValue={movie.rate} precision={0.5} readOnly /> <h3>{movie.title}</h3></div>
                      <iframe width="100%" height="600"src={movie.trailer}></iframe>
                      <p>{movie.longdesc}</p>

                      </Box>
                </Container>
              </React.Fragment>
            }


        </div>
    )
}

export default Description;