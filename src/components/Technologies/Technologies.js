import React from 'react';
import { DiCloud9, DiDropbox, DiFirebase, DiGoogleCloudPlatform, DiPython, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development,Cloud,AI,ML
       including Backend to design.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"color="white"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            HTML,CSS,Bootstrap and Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCloud9 size="3rem"color="white"/>
        <ListContainer>
          <ListTitle>CLOUD</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Google cloud platform(Qwiklabs).
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size="3rem" color="white"/>
        <ListContainer>
          <ListTitle>Python Bootcamp</ListTitle>
          <ListParagraph>
            Built around<br/>
            3 data analysis projects and 3 working games.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDropbox size="3rem"color="white"/>
        <ListContainer>
          <ListTitle>IEEE Robotics</ListTitle>
          <ListParagraph>
            Built a bot<br/>
            from scratch.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" color="white"/>
        <ListContainer>
          <ListTitle>Programming langs</ListTitle>
          <ListParagraph>
            C,C++,Python<br/>
            JavaScript,Java.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"color="white"/>
        <ListContainer>
          <ListTitle>Backend-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            PHP,SQL and Databases.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
