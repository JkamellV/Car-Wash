/* eslint-disable @typescript-eslint/no-explicit-any */
import "./CardImg.css";
function CardImg({ title, img, price }: any) {
  return (
    <div className="card-img">
      <img src={img} alt="" />
      <p>{title}</p>
      <p>{price}</p>
    </div>
  );
}

export default CardImg;
