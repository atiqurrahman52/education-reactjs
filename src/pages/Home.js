import Courses from '../components/home/Courses';
import ExploreCoursers from '../components/home/ExploreCoursers';
import FreeCourses from '../components/home/FreeCourses';
import HeroSection from '../components/home/HeroSection';
import HighestSellingCourses from '../components/home/HighestSellingCourses';
import ShortCourses from '../components/home/ShortCourses';
import Skills from '../components/home/Skills';
import SubjectArea from '../components/home/SubjectArea';
import Swip from '../components/home/Swip';
import BecomeInstructor from '../components/share/BecomeInstructor';
import FeaturedCourses from '../components/share/FeaturedCourses';


const Home = () => {
    return (
        <div>
            <HeroSection />
            <Skills />
            <ExploreCoursers />
            {/* <Courses /> */}
            <FeaturedCourses />
            <SubjectArea />
          {/* <Swip /> */}
            <HighestSellingCourses />
            <FreeCourses />
            <ShortCourses />
            <BecomeInstructor />
        </div>
    );
};

export default Home;