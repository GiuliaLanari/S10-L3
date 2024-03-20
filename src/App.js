import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import NotFound from "./components/NotFound";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TVShows from "./components/TVShows";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: "#221f1f" }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/tv-shows"
            element={
              <Row className="justify-content-center">
                <Col xs={12} md={8}>
                  <TVShows />
                </Col>
              </Row>
            }
          />
          <Route path="/movie-details/:movieId" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
