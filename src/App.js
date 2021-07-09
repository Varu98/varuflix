// import "./App.css";
import Row from "./Row";
import "./App.css";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />{" "}
      <Row
        title="NETFLIX-ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
      />
      <Row title="TRENDING-NOW" fetchURL={requests.fetchTrending} />
      <Row title="TOP-RATED" fetchURL={requests.fetchTopRated} />
      <Row title="ACTION-MOVIES" fetchURL={requests.fetchActionMovies} />
      <Row title="COMEDY-MOVIES" fetchURL={requests.fetchComedyMovies} />
      <Row title="HORROR-MOVIES" fetchURL={requests.fetchHorrorMovies} />
      <Row title="ROMANCE-MOVIES" fetchURL={requests.fetchRomanceMovies} />
      <Row title="DOCUMENTARIES" fetchURL={requests.fetchDocumentaries} />
      {/* <Row title="test" fetchURL={requests.fetchTest} /> */}
    </div>
  );
}

export default App;
