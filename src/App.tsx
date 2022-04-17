import { Link, Outlet } from "react-router-dom";
import styles from "./App.module.scss";

function App() {
  return (
    <div className="App">
      <nav className={styles.nav}>
        <Link to="/" className={styles.link}>
          Top
        </Link>
        <Link to="/timeline" className={styles.link}>
          Timeline
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
