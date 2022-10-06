import './App.css';
import Banner from './Components/Banner';
import Row from './Components/Row';
import Top from './Components/Top';
import requests from './requests';
import Nav from './Components/Nav';


function App() {
  return (
    <div className="App">
      {/* <h1>Hello12</h1> */}
      {/* <Nav/> */}

      <Top/>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />

      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />

      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />

      <Row title="Horror Movies" fetchUrl={requests.fetchNetflixOriginals} />

      <Row title="Comedy Movies" fetchUrl={requests.fetchTopRated} />

      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />




    </div>
  );
}

export default App;
