
import React from 'react';
import Link from 'next/link';
import { List } from '../Technologies/TechnologiesStyles';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { Container, LinkContainer, LinkDiv, ListItem, NavLink, Container2, Div1, Div3, HeaderTitle, SocialIcons, } from './SideBarStyles';


const Sidebar = () => (


  <Container>
    <Container2>


      <Div3>

        <SocialIcons href='https://github.com/'>
          <AiFillGithub size="3rem"  > </AiFillGithub>
        </SocialIcons>


        <SocialIcons href='https://www.linkedin.com/in/shanestevens-cs/'>
          <AiFillLinkedin size="3rem"  > </AiFillLinkedin>
        </SocialIcons>

      </Div3>


      <Div1>
        <Link href="/">
          <HeaderTitle>Shane Stevens</HeaderTitle>
        </Link>
      </Div1>





    </Container2>

    <LinkContainer>
      <LinkDiv>
        <ListItem>
          <Link href='#projects'>
            <NavLink>- Projects</NavLink>
          </Link>
        </ListItem>

        <ListItem>
          <Link href='#tech'>
            <NavLink>- Technologies</NavLink>
          </Link>
        </ListItem>

        <ListItem>
          <Link href='#about'>
            <NavLink>- About</NavLink>
          </Link>
        </ListItem>
      </LinkDiv>

    </LinkContainer>
  </Container>

);

export default Sidebar;
