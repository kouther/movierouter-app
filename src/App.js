import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import { uuid } from "uuidv4"
import { BrowserRouter, Route } from "react-router-dom"
import Description from "./components/Description";

function App() {
  const [movies, setMovies] = useState([
    {
      id:uuid(),
      title: "Mulan",
      rate: 3,
      year: 2020,
      trailer:"https://www.youtube.com/embed/KK8FHdFluOQ",
      longdesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci. Sapien eget mi proin sed libero enim sed. Faucibus purus in massa tempor. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Magna ac placerat vestibulum lectus mauris ultrices eros in. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Sodales ut eu sem integer vitae justo eget magna. Auctor elit sed vulputate mi sit amet. Cursus in hac habitasse platea dictumst quisque sagittis. Vitae purus faucibus ornare suspendisse sed nisi lacus. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Tortor vitae purus faucibus ornare suspendisse sed nisi. Urna et pharetra pharetra massa massa. Pharetra magna ac placerat vestibulum lectus. Velit dignissim sodales ut eu sem integer vitae. Duis ultricies lacus sed turpis tincidunt id. Consequat interdum varius sit amet. Vel eros donec ac odio tempor orci dapibus ultrices.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img:
        "https://media.services.cinergy.ch/media/box1600/72cf0c8639e7204b68fd4c78f3aa9864b30a40da.jpg",
    },
    {
      id:uuid(),
      title: "Coco",
      rate: 4,
      trailer:"https://www.youtube.com/embed/Ga6RYejo6Hk",
      year: 2019,
      longdesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci. Sapien eget mi proin sed libero enim sed. Faucibus purus in massa tempor. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Magna ac placerat vestibulum lectus mauris ultrices eros in. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Sodales ut eu sem integer vitae justo eget magna. Auctor elit sed vulputate mi sit amet. Cursus in hac habitasse platea dictumst quisque sagittis. Vitae purus faucibus ornare suspendisse sed nisi lacus. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Tortor vitae purus faucibus ornare suspendisse sed nisi. Urna et pharetra pharetra massa massa. Pharetra magna ac placerat vestibulum lectus. Velit dignissim sodales ut eu sem integer vitae. Duis ultricies lacus sed turpis tincidunt id. Consequat interdum varius sit amet. Vel eros donec ac odio tempor orci dapibus ultrices.",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img:
        "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_.jpg",
    },
    {
      id:uuid(),
      title: "Spider-Man",
      rate: 4,
      year: 2015,
      trailer:"https://www.youtube.com/embed/TYMMOjBUPMM",
      longdesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci. Sapien eget mi proin sed libero enim sed. Faucibus purus in massa tempor. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Magna ac placerat vestibulum lectus mauris ultrices eros in. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Sodales ut eu sem integer vitae justo eget magna. Auctor elit sed vulputate mi sit amet. Cursus in hac habitasse platea dictumst quisque sagittis. Vitae purus faucibus ornare suspendisse sed nisi lacus. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Tortor vitae purus faucibus ornare suspendisse sed nisi. Urna et pharetra pharetra massa massa. Pharetra magna ac placerat vestibulum lectus. Velit dignissim sodales ut eu sem integer vitae. Duis ultricies lacus sed turpis tincidunt id. Consequat interdum varius sit amet. Vel eros donec ac odio tempor orci dapibus ultrices.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img:
        "https://cdn.pocket-lint.com/r/s/970x/assets/images/159643-tv-news-spider-man-no-way-home-image1-dryautoefj.jpg",
    },
    {
      id:uuid(),
      title: "Cruella",
      rate: 5,
      year: 2021,
      trailer:"https://www.youtube.com/embed/gmRKv7n2If8",
      longdesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci. Sapien eget mi proin sed libero enim sed. Faucibus purus in massa tempor. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Magna ac placerat vestibulum lectus mauris ultrices eros in. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Sodales ut eu sem integer vitae justo eget magna. Auctor elit sed vulputate mi sit amet. Cursus in hac habitasse platea dictumst quisque sagittis. Vitae purus faucibus ornare suspendisse sed nisi lacus. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Tortor vitae purus faucibus ornare suspendisse sed nisi. Urna et pharetra pharetra massa massa. Pharetra magna ac placerat vestibulum lectus. Velit dignissim sodales ut eu sem integer vitae. Duis ultricies lacus sed turpis tincidunt id. Consequat interdum varius sit amet. Vel eros donec ac odio tempor orci dapibus ultrices.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img:
        "https://pinewoodgroup.com/media/7006/cruella-disney-poster.jpg?mode=crop&width=350",
    },
    {
      id:uuid(),
      title: "Snow white",
      rate: 3,
      year: 2016,
      trailer:"https://www.youtube.com/embed/tCFq6gOXDqY",
      longdesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci. Sapien eget mi proin sed libero enim sed. Faucibus purus in massa tempor. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Magna ac placerat vestibulum lectus mauris ultrices eros in. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Sodales ut eu sem integer vitae justo eget magna. Auctor elit sed vulputate mi sit amet. Cursus in hac habitasse platea dictumst quisque sagittis. Vitae purus faucibus ornare suspendisse sed nisi lacus. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Tortor vitae purus faucibus ornare suspendisse sed nisi. Urna et pharetra pharetra massa massa. Pharetra magna ac placerat vestibulum lectus. Velit dignissim sodales ut eu sem integer vitae. Duis ultricies lacus sed turpis tincidunt id. Consequat interdum varius sit amet. Vel eros donec ac odio tempor orci dapibus ultrices.",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img:
        "https://www.almo7eb.com/ar/upload/2018/03/snow_white_and_the_huntsman.jpg",
    },
    {
      id:uuid(),
      title: "Aladdin",
      rate: 2,
      year: 2020,
      trailer:"https://www.youtube.com/embed/foyufD52aog",
      longdesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci. Sapien eget mi proin sed libero enim sed. Faucibus purus in massa tempor. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Magna ac placerat vestibulum lectus mauris ultrices eros in. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Sodales ut eu sem integer vitae justo eget magna. Auctor elit sed vulputate mi sit amet. Cursus in hac habitasse platea dictumst quisque sagittis. Vitae purus faucibus ornare suspendisse sed nisi lacus. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Tortor vitae purus faucibus ornare suspendisse sed nisi. Urna et pharetra pharetra massa massa. Pharetra magna ac placerat vestibulum lectus. Velit dignissim sodales ut eu sem integer vitae. Duis ultricies lacus sed turpis tincidunt id. Consequat interdum varius sit amet. Vel eros donec ac odio tempor orci dapibus ultrices.",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img:
        "https://lumiere-a.akamaihd.net/v1/images/image_9e35a739.jpeg?region=0%2C0%2C540%2C810",
    },
    {
      id:uuid(),
      title: "Enola homles",
      rate: 4,
      year: 2021,
      trailer:"https://www.youtube.com/embed/qsmQnMrqfgw",
      longdesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci. Sapien eget mi proin sed libero enim sed. Faucibus purus in massa tempor. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Magna ac placerat vestibulum lectus mauris ultrices eros in. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Sodales ut eu sem integer vitae justo eget magna. Auctor elit sed vulputate mi sit amet. Cursus in hac habitasse platea dictumst quisque sagittis. Vitae purus faucibus ornare suspendisse sed nisi lacus. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Tortor vitae purus faucibus ornare suspendisse sed nisi. Urna et pharetra pharetra massa massa. Pharetra magna ac placerat vestibulum lectus. Velit dignissim sodales ut eu sem integer vitae. Duis ultricies lacus sed turpis tincidunt id. Consequat interdum varius sit amet. Vel eros donec ac odio tempor orci dapibus ultrices.",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img:
        "https://m.media-amazon.com/images/M/MV5BZjNkNzk0ZjEtM2M1ZC00MmMxLTlmOWEtNWRlZTc1ZTUyNzY4XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
    },
    {
      id:uuid(),
      title: "Jumanji",
      rate: 4,
      year: 2019,
      trailer:"https://www.youtube.com/embed/2QKg5SZ_35I",
      longdesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci. Sapien eget mi proin sed libero enim sed. Faucibus purus in massa tempor. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Magna ac placerat vestibulum lectus mauris ultrices eros in. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Sodales ut eu sem integer vitae justo eget magna. Auctor elit sed vulputate mi sit amet. Cursus in hac habitasse platea dictumst quisque sagittis. Vitae purus faucibus ornare suspendisse sed nisi lacus. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Tortor vitae purus faucibus ornare suspendisse sed nisi. Urna et pharetra pharetra massa massa. Pharetra magna ac placerat vestibulum lectus. Velit dignissim sodales ut eu sem integer vitae. Duis ultricies lacus sed turpis tincidunt id. Consequat interdum varius sit amet. Vel eros donec ac odio tempor orci dapibus ultrices.",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img:
        "https://old.akwam.link/files/1520396833.jpg",
    },
  ]);
  const [keyword, setKeyword] = useState("");
  const search = (word) => {
    setKeyword(word);
  };

  console.log("#movies", movies)
  return (
    <div className="App-header">
      <BrowserRouter>
        <MovieList
          movies={movies.filter(
            (movie) =>
              movie.title
                .toLowerCase()
                .includes(keyword.toLocaleLowerCase().trim())
          )}
        />
        <Route
          path="/movie/:MovieId"
          render={(props) => <Description movies={movies} {...props} />}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
