import Courses from "../components/home/Courses";
import ExploreCoursers from "../components/home/ExploreCoursers";
import FreeCourses from "../components/home/FreeCourses";
import HeroSection from "../components/home/HeroSection";
import HighestSellingCourses from "../components/home/HighestSellingCourses";
import PopularCourse from "../components/home/PopularCourse";
import ShortCourses from "../components/home/ShortCourses";
import Skills from "../components/home/Skills";
import BecomeInstructor from "../components/share/BecomeInstructor";
import FeaturedCourses from "../components/share/FeaturedCourses";
import SubjectAreas from "../components/share/SubjectAreas";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Skills />
      <ExploreCoursers />
      {/* <PopularCourse /> */}
      <FeaturedCourses />
      <SubjectAreas />
      <HighestSellingCourses />
      <FreeCourses />
      <ShortCourses />
      <BecomeInstructor />
    </div>
  );
};

export default Home;
