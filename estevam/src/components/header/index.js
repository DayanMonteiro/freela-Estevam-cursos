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
        <S.LinkList>Home</S.LinkList>
        <S.LinkList>Cursos</S.LinkList>
        <S.LinkList>Mentoria/aula</S.LinkList>
        <S.LinkList>Projetos</S.LinkList>
        {/* <S.LinkList>Contatos</S.LinkList> */}
        <S.LinkList>Sobre</S.LinkList>
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
            href={"https://twitter.com/approvafacil"}
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

        {/* <S.SocialItem>
          <SiTiktok size="3.5rem" color={theme.colors.socialIcons} />
        </S.SocialItem>
        <S.SocialItem>
          <FaYoutube size="3.5rem" color={theme.colors.socialIcons} />
        </S.SocialItem> */}
      </S.SocialLogos>
    </S.Container>
  );
};

export default Header;
