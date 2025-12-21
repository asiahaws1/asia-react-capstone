import { Link } from "react-router-dom";
import heroImg from "../../assets/images/hero.jpg";

export default function Home() {
  return (
    <section className="home-hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Welcome to Aurelia!</h1>
          <p>
            We have all of your stylish, low-price everyday needs. We aim to have
            the highest standard possible!
          </p>

          <Link to="/products">
            <button className="shop-now">Shop Now</button>
          </Link>
        </div>

        <div className="hero-image">
          <img src={heroImg} alt="pink shopping girl" />
        </div>
      </div>
    </section>
  );
}
