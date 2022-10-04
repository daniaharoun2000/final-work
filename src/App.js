import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import "./index.scss"

import { Layout } from "./components";

function App() {
  return (
    <div className="bg-effect">
      <Layout>
        <Routes>
          <Route path="/" exact element={<Home />} />

        </Routes>
      </Layout>
    </div>
  );
}

export default App;


