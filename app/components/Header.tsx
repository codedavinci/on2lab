import modules from "./styles.module.css";

export default function Navbar() {
  return (
    <header className={modules.header}>
      <a href="#" className={modules.logo}>
        EH
      </a>
      <nav className={modules.nav}>
        <a href="#">Home</a>
        <a href="#">Work</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}
