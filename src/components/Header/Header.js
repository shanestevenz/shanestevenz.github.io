import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { GrGamepad } from 'react-icons/gr';

import { Container, Div1,  Div3, HeaderTitle, SelectDiv, SocialIcons, Span } from './HeaderStyles';

const Header = () => (

   

  <Container>
    <Div1>
      <Link href="/">
       <HeaderTitle>Shane Stevens</HeaderTitle>
      </Link>
    </Div1>

  

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
