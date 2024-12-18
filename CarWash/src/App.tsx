import PopularDaily from "./components/carrousel/pupulardaily/PopularDaily";
import { Carrousel } from "./components/carrousel/Carrousel";
import Header from "./components/header/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Carrousel />
      <PopularDaily />
    </>
  );
}

export default App;
