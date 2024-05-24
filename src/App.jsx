import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Gabriel Oliveira"
            content="Lorem ipsum dolor sit amet consectur adipiscing elit."
          />
          <Post 
            author="Vivian Fortuna"
            content="Lorem ipsum dolor sit amet consectur adipiscing elit."
          />
        </main>
      </div>
    </div>
  );
}
