import { PencilLine } from "phosphor-react";
import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src='https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZGUlMjBkZXZlbG9wZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
        alt='Imagem de códigos de uma linguagem de programação'
      />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src='https://avatars.githubusercontent.com/u/67029929?v=4'
        />
        <strong>Thiago Miziara</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href='#'>
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};
