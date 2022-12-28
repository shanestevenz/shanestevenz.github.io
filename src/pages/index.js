import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';

import Animation from '../components/BackgrooundAnimation/Animation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';


{/** This is the home page (also the only page)
  - The different sections are passed into the layout component as children
  - The layout component attaches the header and footer

*/}

const Home = () => {
  return (
    <Layout>
     
      <Section grid>
      <Hero />
        <BgAnimation /> 
        </Section> 
        <Projects />
      <Technologies />
      {/*<Timeline /> */}
      {/*  <Acomplishments /> */}
    </Layout>
  );
};

export default Home;
