import ButtonLeft from "../../icons/ButtonLeft";
import ButtonRigth from "../../icons/ButtonRigth";
import "./Carrousel.css";
export const Carrousel = () => {
  return (
    <section className="main-content">
      <button className="button-left">
        <ButtonLeft />
      </button>
      <div className="container-photo"></div>
      <button className="button-rigth">
        <ButtonRigth />
      </button>
     
    </section>
    
  );
};
