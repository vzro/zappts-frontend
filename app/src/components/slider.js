import { Content } from "./content";
import workers from "../assets/img/workers.png";

export const Slider = () => {
  return (
    <Content primary="#a9c5ba" text="#fff">
      <img src={workers} alt="workers" className="slider-img" />
      <h1 className="slider-title">Lorem, ipsum dolor</h1>
      <p className="slider-text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi quo
        molestiae animi.
      </p>
      <div className="slider-dots">
        <a href="#" className="dots dot-active"></a>
        <a href="#" className="dots"></a>
        <a href="#" className="dots"></a>
        <a href="#" className="dots"></a>
      </div>
    </Content>
  );
};
