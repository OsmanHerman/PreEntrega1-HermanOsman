
import CartWidget from "./CartWidget";
import styles from "./Navbar.module.css";
import NavBarMenu from "./NavbarMenu";

const NavBar = () => {
  return (
    <div className={styles.containerNavbar}>
      <h1>ProyectoShop</h1>
      <NavBarMenu />
      <CartWidget />
    </div>
  );
};

export default NavBar;