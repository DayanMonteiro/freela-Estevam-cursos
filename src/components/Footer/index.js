import React from "react";
import * as S from "./styled";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import Logo from "../../assets/img/logo.png";

const Footer = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Logo src={Logo} />
        {/* <S.TextContainer> */}
        <S.Nav>
          <S.Text>Mapa do site:</S.Text>
          <S.LinkList href="/">Home</S.LinkList>
          <S.LinkList href="/courses">Cursos</S.LinkList>
          <S.LinkList href="/classes">Aulas</S.LinkList>
          <S.LinkList href="/mentoring"> Mentoria</S.LinkList>
          <S.LinkList href="/projects">Projetos</S.LinkList>
          <S.LinkList href="/about"> Sobre</S.LinkList>
        </S.Nav>
        <S.SocialLogos>
          <S.Text>Contatos:</S.Text>
          <S.SocialItem>
            <S.Link
              href={"https://www.facebook.com/TiagoE.Guitar"}
              target={"_blank"}
              passHref
            >
              <S.Text>Facebook</S.Text>
              <FaFacebookF size="1.3rem" />
            </S.Link>
          </S.SocialItem>
          <S.SocialItem>
            <S.Link
              href={"https://www.instagram.com/tiagoestevamtv/"}
              target={"_blank"}
              passHref
            >
              <S.Text>Instagram</S.Text>
              <FaInstagram size="1.3rem" />
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
              <S.Text>Twitter</S.Text>
              <FaTwitter size="1.3rem" />
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
              <S.Text>Whatsapp</S.Text>
              <FaWhatsapp size="1.3rem" />
            </S.Link>
          </S.SocialItem>
        </S.SocialLogos>
        {/* </S.TextContainer> */}
      </S.Content>
    </S.Container>
  );
};

export default Footer;
