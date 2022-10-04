import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"; //the home page that contains every thing in this project

import "./index.scss"//the main scss for all project

import { Layout } from "./components"; //layout that has a header sections
////start of App  function///

function App() {
  return (
          // {/*  bg-effect has a background img , you can see it in index.scss */}
    <div className="bg-effect">
              {/* Layout that has a header sections */}
      <Layout>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App; //export App function to use it  in index.js

////End of App  function///

