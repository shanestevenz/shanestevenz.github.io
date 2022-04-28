import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { GrGamepad } from 'react-icons/gr';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
 <Container>  
   <Div1>
   <Link href="/">
    <a style={{display:"flex", alignItems: "right", color : 'white', marginBottom: '20;'}}>
      <GrGamepad size="5rem" /> <Span>Shane Stevens</Span> 
    </a>

   </Link>
   </Div1>
  
   <Div2>
   <li>
     <Link href='#projects'> 
     <NavLink>Projects</NavLink>
     </Link>
   </li>

   <li>
     <Link href='#tech'> 
     <NavLink>Technologies</NavLink>
     </Link>
   </li>

   <li>
     <Link href='#about'> 
     <NavLink>About</NavLink>
     </Link>
   </li>
   </Div2>

   <Div3> 

     <SocialIcons href='https://github.com/'>
      <AiFillGithub size="3rem"  > </AiFillGithub>
      </SocialIcons>

      <SocialIcons href='https://www.linkedin.com/in/shanestevens-cs/'>
      <AiFillLinkedin size="3rem"  > </AiFillLinkedin>
      </SocialIcons>

   </Div3>
     </Container>               
);

export default Header;
