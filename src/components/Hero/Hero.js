import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
<Section row nopadding>
  <LeftSection>
    <SectionTitle>
      Welcome To <br />
      My Personal Portfolio
    </SectionTitle>
    <SectionText>
    I am Chetan Reddy...an engineer from Information science Dept. I enjoy nothing more than learning the trends that technology is taking in order to work more efficiently.Passionate in AI,ML and Web development....
    
    </SectionText>
    <Button onClick={()=>window.location="https://github.com/chetan009-sjce"}>Learn More</Button>
  </LeftSection>
</Section>
);

export default Hero;