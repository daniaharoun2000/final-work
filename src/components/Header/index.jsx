
// this is a Header function that has a header with 3 sections (these 3 sections is the section 1 & 2 &3 that we can find it in components folder in the Header folder )
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import "./Header.scss"
import classes from'./Header.module.css'; 

//// start of Header function ///

function Header() {
  return (
    <header className={classes.header } id="main-header">
      <section >
        {/* Top Header */}
        <Section1 /> 
      </section>
      <section>
        {/*Sticky Header  */}
        <Section2 />
      </section>
      <section>
        {/* NavBar */}
        <Section3 />
        </section>
    </header>
  );
}

export default Header; //export Header function to use it when It needed
//// End of Header function ///
