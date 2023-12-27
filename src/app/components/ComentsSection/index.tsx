import Carousel from "../Carousel";
import "./styles.css";

const ComentsSection = () => {
  return (
    <div id="coments-section">
      <div className="content">
        <Carousel />
        <div>
          <h2>Lorem ipsum dolor, sit amet consectetur</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quis
            saepe quisquam quod? Corporis repudiandae quaerat laudantium, sit,
            sunt vitae nisi odit enim soluta sint rerum quas perspiciatis dolore
            temporibus?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComentsSection;
