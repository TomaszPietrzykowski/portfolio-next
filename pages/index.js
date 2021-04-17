import styles from "../styles/Home.module.css";
import Featured from "../components/Featured";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import WhatIDo from "../components/WhatIDo";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Featured />
      <WhatIDo />
    </div>
  );
}

export default HomePage;
