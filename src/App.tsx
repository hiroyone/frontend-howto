import { NavLink, Outlet } from "react-router-dom";
import styles from "./App.module.scss";

/**
 * Add the top page
 * @return {JSX} The JSX facade
 */
function App() {
  return (
    <div className="App">
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.link}>
          Top
        </NavLink>
        <NavLink to="/timeline" className={styles.link}>
          Timeline
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
