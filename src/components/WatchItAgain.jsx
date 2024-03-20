import { Component } from "react";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

class WatchItAgain extends Component {
  state = {
    films: [],
    isLoading: true,
    isError: false,
  };

  fetchMoviesHarryPotter = () => {
    fetch("http://www.omdbapi.com/?apikey=67927a3d&s=star%20trek")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Problemi nel caricamento");
        }
      })
      .then((moviesObj) => {
        console.log(moviesObj.Search);
        this.setState({
          films: moviesObj.Search,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log("ERRORE", error);
        this.setState({
          isLoading: false,
          isError: true,
        });
      });
  };

  componentDidMount() {
    this.fetchMoviesHarryPotter();
  }

  render() {
    return (
      <>
        {this.state.isLoading === true && (
          <div>
            <Spinner animation="border" variant="info" />
          </div>
        )}

        {this.state.isError === true && (
          <div>
            <Alert variant="danger">Errore nel caricamento!</Alert>
          </div>
        )}

        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          {this.state.films.map((film) => {
            return (
              <div className="col mb-2 text-center px-1" key={film.imdbID}>
                <img className="img-fluid h-100 object-fit-cover" src={film.Poster} alt={film.Title} />
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default WatchItAgain;
