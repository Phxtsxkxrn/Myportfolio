import styles from "./App.module.css";
import { Hero } from "./componets/Navbar/Hero/Hero";
import { Navbar } from "./componets/Navbar/Navbar";

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
    </div>
  );
}

export default App;
