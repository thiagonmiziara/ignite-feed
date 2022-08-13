import styles from "./Post.module.css";

export const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src='https://avatars.githubusercontent.com/u/67029929?v=4'
          />
          <div className={styles.authorInfo}>
            <strong>Thiago Nunes</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='11 de maio às 08:00' dateTime='2022-05-11 8:00:00'>
          Plicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galera</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nihil
          reiciendis veniam architecto, nam nulla laborum laboriosam!
        </p>

        <p>
          <a href='#'>thiago.developer/doctorcare</a>
        </p>

        <p>
          <a href='#'>#novoprojeto #nlw #rocketseat</a>{" "}
        </p>
      </div>
    </article>
  );
};
