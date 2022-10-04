import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import "./Header.scss"
import classes from'./Header.module.css';

function Header() {
  return (
    <header className={classes.header } id="main-header">
      <section >
        <Section1 />
      </section>
      <section>
        <Section2 />
      </section>
      <section><Section3 /></section>
    </header>
  );
}

export default Header;
