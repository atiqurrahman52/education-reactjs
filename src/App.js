import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./components/authentication/SignIn";
import SignUp from "./components/authentication/SignUp";
import Demo from "./components/courseDetails/Demo";
import Tab from "./components/practice/Tab";
import TermsAndServices from "./pages/TermsAndServices";

import NotFound from "./components/share/NotFound";
import BasicLayout from "./layout/BasicLayout";
import AboutUs from "./pages/AboutUs";
import AllCourses from "./pages/AllCourses";
import ContactUs from "./pages/ContactUs";
import CourseDetails from "./pages/CourseDetails";
import Home from "./pages/Home";
import Instructor from "./pages/Instructor";
import MyCourses from "./pages/MyCourses";
import Sitemap from "./pages/Sitemap";
import Checkout from "./components/checkout/Checkout";
import Profile from "./components/userDashboard/Profile";
import OrderHistory from "./components/userDashboard/OrderHistory";
import Payment from "./components/userDashboard/Payment";
import Certificate from "./components/userDashboard/Certificate";
import Language from "./components/userDashboard/Language";
import PasswordSetting from "./components/userDashboard/PasswordSetting";
import MyNotification from "./components/userDashboard/MyNotification";
import RemoveAccount from "./components/userDashboard/RemoveAccount";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BasicLayout />}>
        <Route index element={<Home />} />
        <Route path="/instructor" element={<Instructor />} />
        <Route path="/all-courses" element={<AllCourses />} />
        <Route path="/my-course" element={<MyCourses />} />
        <Route path="/course-details" element={<CourseDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/privacy" element={<TermsAndServices />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/tab" element={<Tab />} />
        <Route path="/my-profile" element={<Profile />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/certificate" element={<Certificate/>} />
        <Route path="/language" element={<Language />} />
        <Route path="/password-setting" element={<PasswordSetting />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/my-notification" element={<MyNotification />} />
        <Route path="/remove-account" element={<RemoveAccount />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
