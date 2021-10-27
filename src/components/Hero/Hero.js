import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
<Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Welcome To <br />
      My Personal Portfolio
    </SectionTitle>
    <SectionText>
    A developer is an individual that builds and create software and applications. He or she writes, debugs and executes the source code of a software application.
    </SectionText>
    <Button onClick={()=>window.location="https://google.com"}>Learn More</Button>
  </LeftSection>
</Section>
);

export default Hero;