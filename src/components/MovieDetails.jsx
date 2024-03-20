import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const AuthenticationKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY4NWU0ZWFiYWQyODAwMTliZDUyZTgiLCJpYXQiOjE3MTA3NzU4ODYsImV4cCI6MTcxMTk4NTQ4Nn0.QQO5inbMAY6-SH78hrhW8FwlTFKyBlyMq8PA3h0jEFc";

const MovieDetails = function (props) {
  const params = useParams();
  const navigate = useNavigate();

  const [commenti, setCommenti] = useState([]);

  const fetchCommenti = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + params.movieId, {
      headers: {
        Authorization: "Bearer " + AuthenticationKey,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Problemi nel caricamento");
        }
      })
      .then((commentiArrey) => {
        setCommenti(commentiArrey);
      })
      .catch((error) => {
        console.log("ERRORE", error);
      });
  };

  const [titolo, setTitolo] = useState();
  const [img, setImg] = useState();
  const [language, setLanguage] = useState();
  const [actors, setActors] = useState();
  const [director, setDirector] = useState();
  const [year, setYear] = useState();

  const cardFech = () => {
    fetch("http://www.omdbapi.com/?apikey=67927a3d&i=" + params.movieId)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Problemi nel caricamento");
        }
      })
      .then((movie) => {
        console.log(movie);
        setTitolo(movie.Title);
        setImg(movie.Poster);
        setLanguage(movie.Language);
        setActors(movie.Actors);
        setDirector(movie.Director);
        setYear(movie.Year);
      })
      .catch((error) => {
        console.log("ERRORE", error);
      });
  };

  useEffect(() => {
    fetchCommenti();
    cardFech();
  }, [params.movieId]);

  return (
    <Container className="my-4">
      <Row>
        <Col xs={12} md={4}>
          <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title className="fw-bolder">{titolo}</Card.Title>
              <Card.Text>
                <p className="fw-bold">
                  Language: <span className="fw-normal">{language}</span>
                </p>
                <p className="fw-bold">
                  Actors: <span className="fw-normal">{actors}</span>
                </p>
                <p className="fw-bold">
                  Director: <span className="fw-normal">{director}</span>
                </p>
                <p className="fw-bold">
                  Year: <span className="fw-normal">{year}</span>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} className="text-white">
          <h4>Commenti:</h4>
          <ul>
            {commenti.map((commento) => {
              return (
                <li key={commento._id}>
                  <h6>{commento.author}</h6>
                  {commento.comment}
                </li>
              );
            })}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
