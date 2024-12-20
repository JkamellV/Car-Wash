import CardImg from "../cardimg/CardImg";
import Footer from "../footer/Footer";
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
          <div className="photo">
            {/* <div className="box-secundari"></div> */}
          </div>
          <div className="description">
            <div className="box-description">
              <h3>Thinking About what to get?</h3>
              <li>Seat washing</li>
              <li>Vacuum cleaning</li>
              <li>Interior wet cleaning</li>
              <li>Window wiping</li>
            </div>
            <button className="btn-explore-more">Explore more</button>
          </div>
        </div>
        <div className="line"></div>
        <Footer />
      </div>
    </>
  );
}

export default PopularDaily;
