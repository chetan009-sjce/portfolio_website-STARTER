import React from 'react';
import { AiFillBook, AiFillFormatPainter, AiFillGithub, AiFillIdcard, AiFillInstagram, AiFillLayout, AiFillLinkedin, AiFillMessage, AiFillSignal, AiFillStar } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn><LinkTitle>Call</LinkTitle>
      <LinkItem href="tel:111-111-1111">111-444-2222</LinkItem>
      
      </LinkColumn>
      <LinkColumn><LinkTitle>Email</LinkTitle>
      <LinkItem href="mailto:contact@pklessons12@gmail.com">pklessons12@gmail.com</LinkItem>
      
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Designed by Chetan[Bobby]</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://www.facebook.com/chetanreddy.c.kadda">
        <AiFillMessage size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://github.com/chetan009-sjce">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/chetan-reddy-2671b320b">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/chet_aan_005?r=nametag">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
      </SocialContainer>
</SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
