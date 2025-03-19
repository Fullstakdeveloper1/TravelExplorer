import Navbar from "../components/Navbar";
import Tours from "./Tours";

function Home() {
  return (
    <div className="home">
      <Navbar />

      <div className="container">
        <h1 className="main-title">Explore the World</h1>
      </div>
      <Tours/>
    </div>
  );
}

export default Home;
