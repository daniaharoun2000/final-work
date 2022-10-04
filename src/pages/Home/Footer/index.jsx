// Footer Index by Dania Haroun !!!

import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import "./Footer.scss"

function Footer() {
  return (
    <div className="footercover bg-cat mb-5 mb-md-0 ">
      <section >
        <Section1 />
      </section>
   <section>
        <Section2 />
      </section>
      <section><Section3 /></section> 
    </div>
  );
}

export default Footer;
