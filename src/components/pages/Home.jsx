import heroImg from "../../assets/images/hero-image-pink.jpg";



export default function Home() {
  return (
    <section className="home-hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Welcome to Aurelia!</h1>
          <p>We have all of your stylish, low-price everyday needs. We aim to have the highest standard possible!</p>
          <button className="shop-now">Shop Now</button>
        </div>

        <div className="hero-image">
        <img src={heroImg} alt="pink shopping girl"></img>
        </div>
      </div>
    </section>
  );
}
