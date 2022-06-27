import { Header } from "./components/Header";

import styles from "./App.module.css";
import "./global.css";
import Post from "./components/Post";
import { Sidebar } from "./components/Sidebar";

export const App = () => {
  return (
    <div className='App'>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author='Lorem Ipsum'
            postMessage='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, deleniti cupiditate debitis laborum sequi blanditiis ea ratione quod error! Vel minima saepe voluptatum doloremque illum aut similique hic ipsam quo!
'
          />
          <Post
            author='Lorem Ipsum'
            postMessage='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, deleniti cupiditate debitis laborum sequi blanditiis ea ratione quod error! Vel minima saepe voluptatum doloremque illum aut similique hic ipsam quo!
'
          />
        </main>
      </div>
    </div>
  );
};

export default App;
