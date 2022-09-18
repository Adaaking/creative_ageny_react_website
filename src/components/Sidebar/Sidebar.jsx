import { navbar } from "../../common/data";
import logo from "../../common/images/sidebar.png";
import "./sidebar.scss";
import { HashLink as Link } from "react-router-hash-link";
const Sidebar = ({ isSidebarOpen, setSidebarOpen }) => {
  return (
    <div className={isSidebarOpen ? "sidebar display" : "sidebar"}>
      <div className="sidebar-logo">
        <img src={logo} alt="" style={{ color: "" }} />
      </div>
      <div className="side-links">
        {navbar.map((nav) => {
          return (
            <article key={nav.id}>
              <Link
                to={nav.route}
                style={{ color: "black", marginTop: "1rem" }}
                onClick={() => setSidebarOpen(false)}
                smooth
              >
                {nav.name}
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
