import { Navbar, Footer } from "./components";
import { Hero, TrendIndex, RankingIndex, PopularMedia } from "./views";
import "./assets/styles/styles.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <TrendIndex />
      <RankingIndex />
      <PopularMedia />
      <Footer />
    </div>
  );
}

export default App;
