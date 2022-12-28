import React from 'react';
import Link from 'next/link';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        my Portfolio
      </SectionTitle>

      <SectionText>
        This portfolio was created with Next.js as a learning experience. Keep reading to see some cool projects I've worked on! 
        <br></br> Feel free to reach out to me with any questions 
         <br></br>Contact: smstevens@wpi.edu
      </SectionText>

    <Link href='#about'> 
    <Button > Learn More</Button>
     </Link>


      {/*<Button onClick = {() => window.location = 'https://google.com'}  > 
    Learn More
  </Button>
*/}
    </LeftSection>

  </Section>
);

export default Hero;