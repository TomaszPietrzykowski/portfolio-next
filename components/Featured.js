import styles from "../styles/Home.module.css";

const Featured = () => {
  return (
    <section className={styles.featured}>
      <div className={styles.featuredLeft}>
        <h2 className={styles.featuredSubtitle}>Featured project</h2>
        <h1 className={styles.featuredTitle}>Climate Monitor</h1>
        <h3 className={styles.featuredWww}>www.climatemonitor.info</h3>
        <h4 className={styles.featuredSubhead}>Free Public API</h4>
        <p className={styles.featuredPara}>
          RESTful API serving latest and historical climate data in json format.
          Data on atmospheric greenhouse gasses, global temperatures, sea levels
          and condition of the glaciers. Gathered over multiple sources like
          NASA, NOAA and Berkely Institute, stored, updated daily and server on
          demand.
        </p>
        <h4 className={styles.featuredSubhead}>User Interface</h4>
        <p className={styles.featuredPara}>
          Climate data presented as an easy to read chart with dynamic data
          scope, as a table or downloadable file. Up to date newsfeed provides
          macroeconomic and geopolitical context on climate change.
        </p>
      </div>
      <div className={styles.featuredRight}></div>
    </section>
  );
};

export default Featured;
