import React from "react";
import Header from "../../components/header";
import * as S from "./styled";
import PromoAbout from "../../assets/img/promo5.JPG";

const About = () => {
  return (
    <S.Container>
      <Header />
      <S.Content>
        <S.AboutText>
          <S.ContainerText>
            <S.Title>Thaigo Estevam</S.Title>
            <S.Paragraph>
              Músico profissional guitarra/violonista e empresário, Tiago
              Estevam atua no mercado musical como freelance, consultor musical
              e produtor artístico, além de participar de gravações online e
              apresentações com diversos artistas e bandas regionais e trio
              instrumental em toda região Sul Fluminense (Rj).
            </S.Paragraph>
            <S.Paragraph>
              Cursou guitarra no instituto Villa-Lobos em 2009, é idealizador do
              projeto intitulado CLUB DO GUITARRISTA, evento que reúne vários
              guitarristas da região Sul fluminense,
            </S.Paragraph>
            <S.Paragraph>
              Cursou marketing musical pela Hotstage e também atua com gestão e
              mananger de artistas solos e bandas.
            </S.Paragraph>
            <S.Paragraph>
              Tiago Estevam nasceu em 1988, natural de Piraí, uma cidade do
              interior do Rio de Janeiro.
            </S.Paragraph>
            <S.Paragraph>
              Desde 2009 onde iniciou seus estudos no conservatório Villa-Lobos
              e desde então vem atuando no cenário musical.
            </S.Paragraph>
            <S.Paragraph>
              Em 2011 começou a trabalhar profissionalmente com música, dando
              aulas de guitarra e violão em escolas particulares em sua cidade.
              Um dos projetos de destaque é o Piraí Musical onde Thiago Estevam
              tem levado a música e a cultura para centenas de crianças e
              adolescentes, fazendo assim o município crescer em cultura e
              musicalidade. O projeto conta com mais de 300 alunos por ano, com
              13 polos espalhados pelacidade de Piraí
            </S.Paragraph>
            <S.Paragraph>
              Em 2012 começou a fazer shows profissionalmente em sua região,
              tomando mais visibilidade de seus trabalhos como guitarrista
              atuando no meio gospel.
            </S.Paragraph>
            <S.Paragraph>
              Já em 2015 entrou para banda CASA 30, aonde teve destaque e
              reconhecimento em toda região sul fluminense, como guitarrista e
              músico atuante, após essa visibilidade teve vários convites para
              acompanhar outros artistas e bandas regionais com shows ao vivo,
              gravações de CD, DVD, Clipes e turnês regionais.
            </S.Paragraph>
            <S.Paragraph>
              Em 2016 criou “CLUB DO GUITARRISTA”, evento criado por Tiago
              Estevam no final de 2016, o club do guitarrista veio com o intuito
              de fomentar o mundo guitarristico na região sul fluminense, e
              poder aumentar o poderio cultural em várias cidades da região,
              assim fazendo crescer o mercado musical, com workshops, palestras
              musicais, jams, entrevistas e a valorização dos produtos
              nacionais, os famosos Hand Made Brazil.
              <S.Paragraph>
                Em 2017 ingressou na faculdade de Licenciatura em Música, pela
                Universidade de Barra Mansa (UBM), e teve sua graduação
                concluída no ano de 2020.
              </S.Paragraph>
            </S.Paragraph>
            <S.Paragraph>
              Em 2018 cursou Marketing Musical pela Hotstage, onde buscou atuar
              em outras áreas ampliando assim campo de trabalho no cenário
              musical, podendo assim prestar consultoria para novos artistas e
              bandas em sua região. Fechou parceria com algumas marcas de
              equipamentos e acessórios nacionais, e vem atuando com shows ao
              vivo e mantendo as gravações online, pré-produções, produções
              artísticas, LIVES e workshops ao vivo.
            </S.Paragraph>
            <S.Paragraph>
              Já em 2019, cursou pela PUCRS alguns cursos de extensão, visando
              aumentar seus conhecimentos na área de gestão e produtividade de
              carreiras e negócios.
            </S.Paragraph>
            <S.Paragraph>
              Em 2021 inaugurou o primeiro escritório virtual (@murbmusic), de
              agenciamento e gestão de carreiras, para novos artistas e bandas
              em sua cidade que será atuante em toda região Sul-Fluminense
            </S.Paragraph>
          </S.ContainerText>
          <S.ImageAbout src={PromoAbout} />
        </S.AboutText>
      </S.Content>
    </S.Container>
  );
};

export default About;
