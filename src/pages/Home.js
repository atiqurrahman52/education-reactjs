import Courses from '../components/home/Courses';
import HeroSection from '../components/home/HeroSection';
import Skills from '../components/home/Skills';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <Skills />
            <Courses />
        </div>
    );
};

export default Home;