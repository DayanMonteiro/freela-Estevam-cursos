import React from "react";
import * as S from "./styled";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Header = () => {
  return (
    <S.Container>
      <S.Nav>
        <S.LinkList href="/">Home</S.LinkList>
        <S.LinkList href="/courses">Cursos</S.LinkList>
        <S.LinkList href="/classes">Aulas</S.LinkList>
        <S.LinkList href="/mentoring"> Mentoria</S.LinkList>
        <S.LinkList href="/projects">Projetos</S.LinkList>
        <S.LinkList href="/about"> Sobre</S.LinkList>
      </S.Nav>

      <S.SocialLogos>
        <S.SocialItem>
          <S.Link
            href={"https://www.facebook.com/TiagoE.Guitar"}
            target={"_blank"}
            passHref
          >
            <FaFacebookF size="3.5rem" />
          </S.Link>
        </S.SocialItem>
        <S.SocialItem>
          <S.Link
            href={"https://www.instagram.com/tiagoestevamtv/"}
            target={"_blank"}
            passHref
          >
            <FaInstagram size="3.5rem" />
          </S.Link>
        </S.SocialItem>
        <S.SocialItem>
          <S.Link
            href={
              "https://twitter.com/tiagoestevamtv?t=zYXZyH20jd57RX-qqpMl6w&s=09"
            }
            target={"_blank"}
            passHref
          >
            <FaTwitter size="3.5rem" />
          </S.Link>
        </S.SocialItem>
        <S.SocialItem>
          <S.Link
            href={
              "https://api.whatsapp.com/send?phone=5524981451251&text=Ol%C3%A1%20poderia%20me%20ajudar%20%3F"
            }
            target={"_blank"}
            passHref
          >
            <FaWhatsapp size="3.5rem" />
          </S.Link>
        </S.SocialItem>
      </S.SocialLogos>
    </S.Container>
  );
};

export default Header;
