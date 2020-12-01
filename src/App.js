import ArtistCard from "./components/artistCard.jsx";
import ironmaiden from "./assets/images/iron-maiden.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/searchBar.jsx";
function App() {
  return (
    <>
      <SearchBar />
      <div className="container">
        <div className="row">
          <ArtistCard artistImg={ironmaiden} artistName="Iron Maiden" />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
        </div>
      </div>
    </>
  );
}

export default App;
