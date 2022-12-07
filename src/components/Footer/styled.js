import { styled } from "../../theme";

export const Container = styled("div", {
  width: "100%",
  position: "fixed",
  bottom: 0,
});

export const Content = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",

  height: "7rem",
  // padding: "0 5rem",
  // backgroundColor: "red",
});

export const Text = styled("p", {
  color: "$white",
  fontSize: "xs",
  padding: "1rem",
});

// export const TextContainer = styled("div", {
//   display: "flex",
//   flexDirection: "row",
//   alignItems: "flex-start",
//   // justifyContent: "center",
// });

export const Nav = styled("div", {
  display: "flex",
  flexDirection: "row",
  // width: "40rem",

  // backgroundColor: "aqua",
});

export const LinkList = styled("a", {
  fontSize: "$sm",
  textDecoration: "none",
  listStyle: "none",
  cursor: "pointer",
  height: "0.8rem",
  color: "#fff",
  fontSize: "xs",
  padding: "1rem",

  "&:hover": {
    color: "$grey200",
  },
});

export const SocialLogos = styled("div", {
  // width: "30rem",
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-between",
  // marginLeft: "1.5rem",

  // width: "30rem",
  // height: "15rem",

  // backgroundColor: "aqua",

  // flexWrap: "wrap",

  // @media screen and (min-width: 480px) {
  //   margin-bottom: 50px;
  // }

  // @media screen and (min-width: 768px) {
  //   position: absolute;
  //   width: 300px;
  //   right: 46px;
  //   margin-top: 140px;
  // }

  // @media screen and (min-width: 1025px) {
  //   position: absolute;
  //   margin-top: 12rem;
  //   right: 228px;
  // }
});

export const SocialItem = styled("div", {
  cursor: "pointer",
});

export const Link = styled("a", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  color: "$white",
});

export const Logo = styled("img", {
  width: "15rem",
  marginTop: "3rem",
});
