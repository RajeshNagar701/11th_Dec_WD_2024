import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./website/pages/Index";
import Header from "./website/component/Header";
import Footer from "./website/component/Footer";
import Properties from "./website/pages/Properties";
import Properties_details from "./website/pages/Properties_details";
import Contact from "./website/pages/Contact";
import Signup from "./website/pages/Signup";
import Login from "./website/pages/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<> <Header/> <Index/> <Footer/></>}></Route>
          <Route path="/properties" element={<> <Header/> <Properties/> <Footer/></>}></Route>
          <Route path="/property-details" element={<> <Header/> <Properties_details/> <Footer/></>}></Route>
          <Route path="/contact" element={<> <Header/> <Contact/> <Footer/></>}></Route>
          <Route path="/signup" element={<> <Header/> <Signup/> <Footer/></>}></Route>
          <Route path="/login" element={<> <Header/> <Login/> <Footer/></>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
