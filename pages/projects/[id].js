import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";

const Project = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Particular project: {router.query.id}{" "}
        <a href="https://nextjs.org"> Next.js!</a>
      </h1>
    </div>
  );
};

export default Project;
