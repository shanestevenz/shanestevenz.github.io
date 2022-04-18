import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding> 
<LeftSection>
  <SectionTitle main center>
    Welcome to <br/>
      my Portfolio
  </SectionTitle>

  <SectionText>
    The purpose of this website was to learn more about React and Next.js
  </SectionText>
  <Button onClick = {() => window.location = 'https://google.com'}  > 
    Learn More
  </Button>
</LeftSection>

  </Section>
);

export default Hero;