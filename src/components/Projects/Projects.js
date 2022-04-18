import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id='projects'>
    < SectionDivider />
    <SectionTitle main>Projets</SectionTitle>
    <GridContainer>
      {projects.map((project) => (
        <BlogCard>
          <Img src={project.image} />
          <TitleContent>
            <HeaderThree title> {project.title}</HeaderThree>
            <Hr />

          </TitleContent>
          <CardInfo> {project.description} </CardInfo>

          <div>
            <TitleContent>Tools/Skills</TitleContent>
            <TagList>

              {project.tags.map((tag, i) => (
                <Tag key={i}>{tag} </Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={project.visit}> Code </ExternalLinks>
            <ExternalLinks href={project.source}> Source </ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;