import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./website/pages/Index";
import Header from "./website/component/Header";
import Footer from "./website/component/Footer";
import Properties from "./website/pages/Properties";
import Properties_details from "./website/pages/Properties_details";
import Contact from "./website/pages/Contact";
import Signup from "./website/pages/Signup";
import Login from "./website/pages/Login";
import AHeader from "./admin/component/AHeader";
import AFooter from "./admin/component/AFooter";
import Admin_login from "./admin/pages/Admin_login";
import Dashboard from "./admin/pages/Dashboard";
import Add_categories from "./admin/pages/Add_categories";
import Manage_categories from "./admin/pages/Manage_categories";
import Add_properties from "./admin/pages/Add_properties";
import Manage_properties from "./admin/pages/Manage_properties";
import Manage_customer from "./admin/pages/Manage_customer";
import Manage_feedaback from "./admin/pages/Manage_feedaback";
import Manage_booking from "./admin/pages/Manage_booking";

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

          

          <Route path="/admin-login" element={<>  <Admin_login/> <AFooter/></>}></Route>
          <Route path="/dashboard" element={<> <AHeader/> <Dashboard/> <AFooter/></>}></Route>

          <Route path="/add_categories" element={<> <AHeader/> <Add_categories/> <AFooter/></>}></Route>
          <Route path="/manage_categories" element={<> <AHeader/> <Manage_categories/> <AFooter/></>}></Route>

          <Route path="/add_properties" element={<> <AHeader/> <Add_properties/> <AFooter/></>}></Route>
          <Route path="/manage_properties" element={<> <AHeader/> <Manage_properties/> <AFooter/></>}></Route>

          <Route path="/manage_customer" element={<> <AHeader/> <Manage_customer/> <AFooter/></>}></Route>
          <Route path="/manage_feedback" element={<> <AHeader/> <Manage_feedaback/> <AFooter/></>}></Route>
          <Route path="/manage_booking" element={<> <AHeader/> <Manage_booking/> <AFooter/></>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
