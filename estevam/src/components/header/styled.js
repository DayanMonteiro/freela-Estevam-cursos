import { styled } from "../../theme";

export const Container = styled("div", {
  marginTop: 0,
  width: "100vw",
  height: "8vh",
  color: "$white",
  // backgroundColor: "red",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const Nav = styled("div", {
  // backgroundColor: "green",
  width: "70vw",
  height: "5rem",
  // marginTop: "2rem",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
});

export const LinkList = styled("a", {
  width: "100%",
  height: "100%",
  fontSize: "$lg",
  textDecoration: "none",
  listStyle: "none",
  cursor: "pointer",
  //   margin: "0 auto",
  //   padding: 0,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "&:hover": {
    backgroundColor: "$gray500",
    color: "$gray200",
  },
});

export const SocialLogos = styled("div", {
  // maxWidth: "20rem",
  width: "30rem",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginLeft: "1.5rem",
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
  margin: "0 0.75rem",
  cursor: "pointer",
});

export const Link = styled("a", {
  color: "$white",
});
