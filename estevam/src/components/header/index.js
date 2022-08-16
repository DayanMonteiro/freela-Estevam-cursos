import React from "react";
import * as S from "./styled";

const Header = () => {
  return (
    <S.Container>
      <S.Nav>
        <S.LinkList>Sobre</S.LinkList>
        <S.LinkList>Cursos</S.LinkList>
        <S.LinkList>Mentoria/aula</S.LinkList>
        <S.LinkList>Projetos</S.LinkList>
        <S.LinkList>Contatos</S.LinkList>
      </S.Nav>
    </S.Container>
  );
};

export default Header;
