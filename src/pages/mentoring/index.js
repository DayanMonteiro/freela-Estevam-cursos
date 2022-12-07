import React from "react";
import Header from "../../components/header";
import FrontCoverImage1 from "../../assets/img/front-cover-murb.png";
import FrontCoverImage from "../../assets/img/image17.png";
// import Banner from "../../assets/img/public.png";

import Banner from "./components/Banner";
import * as S from "./styled";

const Mentoring = () => {
  return (
    <S.Container>
      <Header />
      {/* <Banner /> */}
      <S.Content>
        {/* <S.Banner>
          <S.FrontCover src={FrontCoverImage1} />
        </S.Banner> */}

        <S.Presentation>
          <S.ContainerText>
            <S.Title>JÁ PENSOU EM TER UMA CARREIRA SÓLIDA?</S.Title>

            <S.SubTitle>
              Muitos artistas tem dúvidas sobre como fazer planejamento do
              marketing da sua carreira musical.
            </S.SubTitle>

            <S.Text>
              Ei você aí, artista, quantas vezes já pensou em parar?
              <br />
              Ou, quantas vezes você procrastinou em apenas tentar começar algo
              em sua carreira musical??
              <br />
              Qual minha meta?
              <br />A grande maioria dos aristas em início de carreira acabam
              pecando nos fatores;
              <br />
              <b>Gestão</b>
              <br />
              <b>Investimento </b>
              <br />
              <b>Planejamento </b>
              <br /> Muitos artistas não sabem como investir, como e onde
              investir. E hoje temos a solução pra esse prévio problema.
            </S.Text>

            <S.Text></S.Text>
          </S.ContainerText>
          <S.ContainerImage>
            {/* <img src="../../assets/img/murb-logo.jpg" /> */}
            {/* <S.FrontCover src={FrontCoverImage} /> */}
            <S.ContainerText>
              <S.SubTitle>
                UM NOVO CONCEITO GESTÃO DE CARREIRA ARTISTICA
              </S.SubTitle>
              <S.Text>
                A Murb tem o objetivo de desenvolver e fazer toda a gestão do
                artista através do marketing musical, análise de nichos e
                planejamento de carreira à longo prazo.
                <br />
                <br />
                Iremos estudar o perfil do artista, propondo o melhor
                enquadramento dentro de seu estilo musical e de apresentação
                pessoal. Sugerir adaptações na forma de atuação e apresentação,
                tais como presença de palco, atitude, postura em entrevistas,
                etc.
              </S.Text>
            </S.ContainerText>
          </S.ContainerImage>
        </S.Presentation>
      </S.Content>
    </S.Container>

    // <S.Container>
    //   <Header />
    //   <Banner />
    // </S.Container>
  );
};

export default Mentoring;
