import { styled } from "../../theme";

export const Container = styled("section", {
  width: "100%",
  height: "671px",

  // @media (max-width: 500px) {
  //   height: 382px;
  // }
});

export const Slide = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  height: "671px",
  // background: ${({ url }) =>
  //   url ? `url(${url}) no-repeat center center;` : `none`};
  backgroundSize: "cover",

  /* @media (max-width: 500px) {
      display: none;
    } */
});

export const SlideMobile = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  height: "382px",
  // background: ${({ url }) =>
  //   url ? `url(${url}) no-repeat center center;` : `none`};
  backgroundSize: "cover",

  /* @media (min-width: 500px) {
      display: none;
    } */
});

// export const DivTitulo = styled("div", {
//   width: "222px",
//   height: "57px",
//   position: "absolute",
//   left: "502px",
//   top: "120px",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "space-between",
// });

// export const Titulo = styled("h1", {
//     fontFamily: "DosisSemiBold",
//     fontSize: "24px",
//     lineHeight: "31px",
//     color: "white",

// });

// export const Descricao = styled("p", {
//     fontFamily: "SourceSansProRegular",
//     fontSize: "16px",
//     lineHeight: "20px",
//     color: "white",
// });

// export const DivPreco = styled("div", {
//     width: "202px",
//     height: "88px",
//     position: "absolute",
//     left: "536px",
//     top: "523px",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
// });

// export const Preco = styled.h1`
//   font-family: "DosisBold";
//   font-size: 51px;
//   line-height: 64px;
//   color: ${colors.white};
// `;

// export const PrecoSmall = styled.span`
//   font-family: "DosisBold";
//   font-size: 24px;
//   line-height: 31px;
//   color: ${colors.white};
// `;

// export const Pagamento = styled.p`
//   font-family: "SourceSansProRegular";
//   font-size: 19px;
//   line-height: 24px;
//   color: ${colors.white};
// `;

// export const OfertaNumero = styled.a`
//   width: 177px;
//   height: 52px;
//   position: absolute;
//   right: 200px;
//   bottom: 78px;
//   background: ${({ src }) =>
//     src ? `url(${src}) no-repeat center center;` : `none`};
//   background-size: cover;
// `;

export const ButtonPrev = styled("button", {
  display: "flex",
  alignItems: "center",
  backgroundColor: "transparent",
  color: "white",
  position: "absolute",
  zIndex: "999",
  left: "0",
  top: "430px",
  transition: "300ms ease",

  /* &:hover {
      transform: scale(1.2);
    }
  
    @media screen and (max-width: 1100px) {
      right: 154px;
    }
  
    @media screen and (max-width: 680px) {
      left: 0;
      top: 40%;
    } */
});

export const ButtonNext = styled("button", {
  display: "flex",
  alignItems: "center",
  backgroundColor: "transparent",
  color: "white",
  position: "absolute",
  zIndex: "999",
  right: "0",
  top: "430px",
  transition: "300ms ease",

  /* &:hover {
      transform: scale(1.2);
    }
  
    @media screen and (max-width: 1100px) {
    }
  
    @media screen and (max-width: 680px) {
      top: 40%;
    } */
});
