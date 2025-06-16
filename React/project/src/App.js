import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./website/pages/Index";
import Header from "./website/component/Header";
import Footer from "./website/component/Footer";
import Properties from "./website/pages/Properties";
import Properties_details from "./website/pages/Properties_details";
import Contact from "./website/pages/Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<> <Header/> <Index/> <Footer/></>}></Route>
          <Route path="/properties" element={<> <Header/> <Properties/> <Footer/></>}></Route>
          <Route path="/property-details" element={<> <Header/> <Properties_details/> <Footer/></>}></Route>
          <Route path="/contact" element={<> <Header/> <Contact/> <Footer/></>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
