
import React from 'react';
import Link from 'next/link';
import { List } from '../Technologies/TechnologiesStyles';

import { Container, LinkDiv,ListItem,NavLink } from './SideBarStyles';

const Sidebar = () => (
  <Container>

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

  </Container>
);

export default Sidebar;
