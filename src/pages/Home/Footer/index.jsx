// Footer Index.js by Dania Haroun !!!

import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import "./Footer.scss"
//// start of Footer function ///

function Footer() {
  return (
    <div className="footercover bg-cat mb-5 mb-md-0">
      <section >
              {/* Section 1 section */}
        <Section1 />
      </section>
   <section>
                  {/* Section 2 section */}
        <Section2 />
      </section>
      <section>
                      {/* Section 3 section */}
        <Section3 />
        </section> 
    </div>
  );
}

export default Footer; //export Footer function to use it when It needed
//// End of Footer function ///
