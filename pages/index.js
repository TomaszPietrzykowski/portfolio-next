import styles from "../styles/Home.module.css";
import Featured from "../components/Featured";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Featured />
    </div>
  );
}

export default HomePage;
