import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, TechDivider, TitleContainer } from './TechnologiesStyles';
import { technologies } from '../../constants/constants';
const Technologies = () => (
  <Section nopadding id='tech'>
    < SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText> Technologies I use </SectionText>

  {/* using the map function, this creates a list item for each technology defined in the constants file*/}
    <List> 
      {technologies.map((tech) => (
        <ListItem>

          <a style={{ display: "flex" }}> 
            <tech.icon size="5rem" vertical-align="middle" />
            <ListTitle >  {tech.title} </ListTitle>
          </a>
          <TechDivider />
          <ListParagraph> {tech.description} </ListParagraph>
        </ListItem>

      ))}
    </List>

  </Section>
);

export default Technologies;
