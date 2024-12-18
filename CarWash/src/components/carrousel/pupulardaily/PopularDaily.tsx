import CardImg from "../../cardimg/CardImg";
import Footer from "../../footer/Footer";
import "./PopularDaily.css";
function PopularDaily() {
  return (
    <>
      <div className="popular-dayli-container">
        <div className="text-daily-popular ">
          <h1>Popular Day</h1>
          <h6>Hola</h6>
        </div>
        <div className=" container-cards">
          <CardImg />
        </div>
        <div className="container-reductions">
          <div className="photo"></div>
          <div className="description"></div>
        </div>
        <div className="line"></div>
        <Footer />
      </div>
    </>
  );
}

export default PopularDaily;
