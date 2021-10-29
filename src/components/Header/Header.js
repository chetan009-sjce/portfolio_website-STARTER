import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{dispaly:"flex",alignItems:"center",color:"cyan"}}>
          <DiCssdeck size="10rem"/><Span size="10rem">Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#Projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/chetan009-sjce">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/chetan-reddy-2671b320b">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/chet_aan_005?r=nametag">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
