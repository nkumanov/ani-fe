import { Link, Outlet } from "react-router-dom";
import styles from "./Admin.module.scss";
function Admin() {
  return (
    <section>
      <header className={styles.header}>
        <ul>
          <li>
            <Link to="/admin/guests">Guests</Link>
          </li>
          <li>
            <Link to="/admin/new-guests">Add new guest</Link>
          </li>
        </ul>
      </header>
      <div>
        <Outlet></Outlet>
      </div>
    </section>
  );
}

export default Admin;
