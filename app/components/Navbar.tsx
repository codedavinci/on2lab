import modules from "./styles.module.css";

export default function Navbar() {
  return (
    <div className={modules.nav}>
      <ul className={modules.navitemscontainer}>
        <li className={modules.navitem}>Home</li>
        <li className={modules.navitem}>Work</li>
        <li className={modules.navitem}>About</li>
        <li className={modules.navitem}>Contact</li>
      </ul>
    </div>
  );
}
