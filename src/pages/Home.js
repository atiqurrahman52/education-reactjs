import Courses from '../components/home/Courses';
import ExploreCoursers from '../components/home/ExploreCoursers';
import FreeCourses from '../components/home/FreeCourses';
import HeroSection from '../components/home/HeroSection';
import Skills from '../components/home/Skills';
import Swip from '../components/home/Swip';


const Home = () => {
    return (
        <div>
            <HeroSection />
            <Skills />
            {/* <Courses /> */}
          <Swip />
            <ExploreCoursers />
            <FreeCourses />
        </div>
    );
};

export default Home;